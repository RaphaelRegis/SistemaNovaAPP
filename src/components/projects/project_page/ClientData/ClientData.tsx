import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ClientData } from '@/entities/projects/Project';
import {
    sectionStyles,
    clientDataStyles,
} from '@/styles/projects/project_page/ProjectPage.style';
import EditModal from '@/components/common/modal/EditModal';
import ClientDataForm from './ClientDataForm';
import ClientDataEmptyState from './ClientDataEmptyState';
import ClientDataCompleteState from './ClientDataCompleteState';
import ProjectPageCommonEditButton from '../common/ProjectPageCommonEditButton';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ClientDataProps {
    clientData: ClientData | null;
    onUpdate?: (data: ClientData) => void;
}

export default function ClientDataView({ clientData, onUpdate }: ClientDataProps) {
    const [expanded, setExpanded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const toggle = useCallback(() => {
        if (!clientData) return;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded((prev) => !prev);
    }, [clientData]);

    const handleConfirm = (data: ClientData) => {
        onUpdate?.(data);
        setModalVisible(false);
    };

    return (
        <>
            <View style={sectionStyles.wrapper}>
                <TouchableOpacity
                    style={sectionStyles.header}
                    onPress={toggle}
                    activeOpacity={clientData ? 0.7 : 1}
                >
                    <View style={sectionStyles.headerLeft}>
                        <Text style={sectionStyles.headerTitle}>Cliente</Text>
                        {!clientData && (
                            <Text style={sectionStyles.headerCount}>(não cadastrado)</Text>
                        )}
                    </View>
                    {clientData && (
                        <Text style={sectionStyles.chevron}>{expanded ? '▲' : '▼'}</Text>
                    )}
                </TouchableOpacity>

                {/* Estado vazio: botão para adicionar */}
                {!clientData && (
                    <ClientDataEmptyState onAdd={() => setModalVisible(true)} />
                )}

                {/* Dados expandidos */}
                {clientData && expanded && (
                    <>
                        <View style={sectionStyles.divider} />
                        <View style={sectionStyles.body}>
                            <ClientDataCompleteState
                                clientData={clientData}
                            />
                            {/* Botão de edição */}
                            <ProjectPageCommonEditButton
                                onPress={() => setModalVisible(true)}
                                text="Editar cliente"
                            />
                        </View>
                    </>
                )}
            </View>

            <EditModal
                title={clientData ? 'Editar cliente' : 'Adicionar cliente'}
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            >
                <ClientDataForm initialData={clientData} onConfirm={handleConfirm} />
            </EditModal>
        </>
    );
}
