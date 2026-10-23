import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Address } from '@/entities/projects/Project';
import {
    sectionStyles,
    addressListStyles as styles,
} from '@/styles/projects/project_page/ProjectPage.style';
import EditModal from '@/components/common/modal/EditModal';
import AddressForm from './AddressDataForm';
import ProjectPageCommonEditButton from '../common/ProjectPageCommonEditButton';
import AddressDataAddressList from './AddressDataAddressList';
import AddressDataEmptyListState from './AddressDataEmptyListState';
import ProjectPageCommonDropdown from '../common/ProjectPageCommonDropdown';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AddressDataProps {
    addresses: Address[];
    onUpdate?: (addresses: Address[]) => void;
}

export default function AddressData({ addresses, onUpdate }: AddressDataProps) {
    const [expanded, setExpanded] = useState(false);
    const isEmpty = addresses.length === 0;

    /* Modal state: null = fechado; 'new' = novo; Address = editar existente */
    const [editingAddress, setEditingAddress] = useState<Address | null | 'new'>(null);
    const modalVisible = editingAddress !== null;

    const toggle = useCallback(() => {
        if (isEmpty) return;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded((prev) => !prev);
    }, [isEmpty]);

    const handleConfirm = (data: Address) => {
        if (!onUpdate) { setEditingAddress(null); return; }

        if (editingAddress === 'new') {
            onUpdate([...addresses, { ...data, id: Date.now().toString() }]);
        } else {
            onUpdate(addresses.map((a) => (a.id === data.id ? data : a)));
        }
        setEditingAddress(null);
    };

    const initialFormData: Address | null =
        editingAddress === 'new' ? null : (editingAddress as Address | null);

    return (
        <>
            <View style={sectionStyles.wrapper}>
                <ProjectPageCommonDropdown
                    title="Endereços"
                    count={addresses.length}
                    onPress={toggle}
                    expanded={expanded}
                    chevron={!isEmpty}
                />

                {/* Estado vazio */}
                {isEmpty && (
                    <AddressDataEmptyListState onAdd={() => setEditingAddress('new')} />
                )}

                {/* Lista expandida */}
                {!isEmpty && expanded && (
                    <>
                        <View style={sectionStyles.divider} />
                        <View style={sectionStyles.body}>
                            <AddressDataAddressList
                                addresses={addresses}
                                onUpdate={(a) => setEditingAddress(a)}
                            />

                            {/* Botão de adicionar endereço */}
                            <ProjectPageCommonEditButton
                                onPress={() => setEditingAddress('new')}
                                text="Novo endereço"
                            />
                        </View>
                    </>
                )}
            </View>

            <EditModal
                title={editingAddress === 'new' ? 'Novo endereço' : 'Editar endereço'}
                visible={modalVisible}
                onClose={() => setEditingAddress(null)}
            >
                {modalVisible && (
                    <AddressForm initialData={initialFormData} onConfirm={handleConfirm} />
                )}
            </EditModal>
        </>
    );
}