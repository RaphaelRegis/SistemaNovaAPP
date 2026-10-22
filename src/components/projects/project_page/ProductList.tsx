import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Product } from '@/entities/projects/Project';
import {
    sectionStyles,
    productListStyles as styles,
} from '@/styles/projects/project_page/ProjectPage.style';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    const [expanded, setExpanded] = useState(false);
    const isEmpty = products.length === 0;

    const toggle = useCallback(() => {
        if (isEmpty) return;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded((prev) => !prev);
    }, [isEmpty]);

    return (
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

            {isEmpty && (
                <>
                    <View style={sectionStyles.divider} />
                    <View style={sectionStyles.emptyContainer}>
                        <Text style={sectionStyles.emptyText}>Nenhum produto cadastrado.</Text>
                        <TouchableOpacity style={sectionStyles.addButton} disabled>
                            <Text style={sectionStyles.addButtonText}>+ Adicionar produto</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}

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
                                <TouchableOpacity style={styles.editButton}>
                                    <Text style={styles.editButtonText}>Editar produto</Text>
                                </TouchableOpacity>
                            </View>
                        ))}

                        {/* Botão de adicionar produto */}
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={styles.editButtonText}>+ Novo produto</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
}