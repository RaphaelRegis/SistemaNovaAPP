import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Product } from '@/entities/projects/Project';
import {
    sectionStyles,
    productListStyles as styles,
} from '@/styles/projects/project_page/ProjectPage.style';
import EditModal from '@/components/common/modal/EditModal';
import ProductForm from './forms/ProductForm';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ProductListProps {
    products: Product[];
    onUpdate?: (products: Product[]) => void;
}

export default function ProductList({ products, onUpdate }: ProductListProps) {
    const [expanded, setExpanded] = useState(false);
    const isEmpty = products.length === 0;

    /* Modal state: null = fechado; 'new' = novo; Product = editar existente */
    const [editingProduct, setEditingProduct] = useState<Product | null | 'new'>(null);
    const modalVisible = editingProduct !== null;

    const toggle = useCallback(() => {
        if (isEmpty) return;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded((prev) => !prev);
    }, [isEmpty]);

    const handleConfirm = (data: Product) => {
        if (!onUpdate) { setEditingProduct(null); return; }

        if (editingProduct === 'new') {
            onUpdate([...products, { ...data, id: Date.now().toString() }]);
        } else {
            onUpdate(products.map((p) => (p.id === data.id ? data : p)));
        }
        setEditingProduct(null);
    };

    const initialFormData: Product | null =
        editingProduct === 'new' ? null : (editingProduct as Product | null);

    return (
        <>
            <View style={sectionStyles.wrapper}>
                <TouchableOpacity
                    style={sectionStyles.header}
                    onPress={toggle}
                    activeOpacity={isEmpty ? 1 : 0.7}
                >
                    <View style={sectionStyles.headerLeft}>
                        <Text style={sectionStyles.headerTitle}>Produtos</Text>
                        {!isEmpty && (
                            <Text style={sectionStyles.headerCount}>({products.length})</Text>
                        )}
                        {isEmpty && (
                            <Text style={sectionStyles.headerCount}>(nenhum cadastrado)</Text>
                        )}
                    </View>
                    {!isEmpty && (
                        <Text style={sectionStyles.chevron}>{expanded ? '▲' : '▼'}</Text>
                    )}
                </TouchableOpacity>

                {/* Estado vazio */}
                {isEmpty && (
                    <>
                        <View style={sectionStyles.divider} />
                        <View style={sectionStyles.emptyContainer}>
                            <Text style={sectionStyles.emptyText}>Nenhum produto cadastrado.</Text>
                            <TouchableOpacity
                                style={[sectionStyles.addButton, { opacity: 1 }]}
                                onPress={() => setEditingProduct('new')}
                            >
                                <Text style={sectionStyles.addButtonText}>+ Adicionar produto</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

                {/* Lista expandida */}
                {!isEmpty && expanded && (
                    <>
                        <View style={sectionStyles.divider} />
                        <View style={sectionStyles.body}>
                            {products.map((product, index) => (
                                <View
                                    key={product.id}
                                    style={[
                                        styles.productItem,
                                        index === products.length - 1 && { borderBottomWidth: 0 },
                                    ]}
                                >
                                    {/* Nome + Preço */}
                                    <View style={styles.productHeader}>
                                        <Text style={styles.productName}>{product.name}</Text>
                                        <Text style={styles.productPrice}>R$ {product.price}</Text>
                                    </View>

                                    {/* Dimensões */}
                                    {(product.heights.length > 0 || product.widths.length > 0) && (
                                        <View style={styles.productDimRow}>
                                            {product.heights.length > 0 && (
                                                <Text>
                                                    <Text style={styles.productDimLabel}>Alt: </Text>
                                                    <Text style={styles.productDimValue}>
                                                        {product.heights.join(', ')} m
                                                    </Text>
                                                </Text>
                                            )}
                                            {product.widths.length > 0 && (
                                                <Text>
                                                    <Text style={styles.productDimLabel}>Larg: </Text>
                                                    <Text style={styles.productDimValue}>
                                                        {product.widths.join(', ')} m
                                                    </Text>
                                                </Text>
                                            )}
                                        </View>
                                    )}

                                    {/* Status */}
                                    <View style={product.done ? styles.productDoneTag : styles.productPendingTag}>
                                        <Text style={product.done ? styles.productDoneTagText : styles.productPendingTagText}>
                                            {product.done ? '✓ Concluído' : '⏳ Pendente'}
                                        </Text>
                                    </View>

                                    {/* Observações */}
                                    {product.observations ? (
                                        <Text style={styles.productObs}>{product.observations}</Text>
                                    ) : null}

                                    {/* Botão de editar produto */}
                                    <TouchableOpacity
                                        style={styles.editButton}
                                        onPress={() => setEditingProduct(product)}
                                    >
                                        <Text style={styles.editButtonText}>Editar produto</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}

                            {/* Botão de adicionar produto */}
                            <TouchableOpacity
                                style={styles.editButton}
                                onPress={() => setEditingProduct('new')}
                            >
                                <Text style={styles.editButtonText}>+ Novo produto</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>

            <EditModal
                title={editingProduct === 'new' ? 'Novo produto' : 'Editar produto'}
                visible={modalVisible}
                onClose={() => setEditingProduct(null)}
            >
                {modalVisible && (
                    <ProductForm initialData={initialFormData} onConfirm={handleConfirm} />
                )}
            </EditModal>
        </>
    );
}