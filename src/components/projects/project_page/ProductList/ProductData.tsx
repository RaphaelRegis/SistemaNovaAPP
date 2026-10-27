import React, { useState, useCallback } from 'react';
import { View, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Product } from '@/entities/projects/Project';
import { sectionStyles } from '@/styles/projects/project_page/ProjectPage.style';
import EditModal from '@/components/common/modal/EditModal';
import ProductForm from './ProductDataForm';
import ProductDataEmptyListState from './ProductDataEmptyListState';
import ProjectPageCommonEditButton from '../common/ProjectPageCommonEditButton';
import ProductDataProductList from './ProductDataProductList';
import ProjectPageCommonDropdown from '../common/ProjectPageCommonDropdown';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ProductDataProps {
    products: Product[];
    onUpdate?: (products: Product[]) => void;
}

export default function ProductData({ products, onUpdate }: ProductDataProps) {
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
                <ProjectPageCommonDropdown
                    title="Produtos"
                    count={products.length}
                    onPress={toggle}
                    expanded={expanded}
                    chevron
                />

                {/* Estado vazio */}
                {isEmpty && (
                    <ProductDataEmptyListState onAdd={() => setEditingProduct('new')} />
                )}

                {/* Lista expandida */}
                {!isEmpty && expanded && (
                    <>
                        <View style={sectionStyles.divider} />
                        <View style={sectionStyles.body}>
                            <ProductDataProductList
                                products={products}
                                onUpdate={(p) => setEditingProduct(p)}
                            />

                            {/* Botão de adicionar produto */}
                            <ProjectPageCommonEditButton
                                onPress={() => setEditingProduct('new')}
                                text="+ Novo produto"
                            />
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