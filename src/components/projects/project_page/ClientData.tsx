import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ClientData } from '@/entities/projects/Project';
import {
    sectionStyles,
    clientDataStyles,
} from '@/styles/projects/project_page/ProjectPage.style';
import EditModal from '@/components/common/modal/EditModal';
import ClientDataForm from './forms/ClientDataForm';

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
                    <>
                        <View style={sectionStyles.divider} />
                        <View style={sectionStyles.emptyContainer}>
                            <Text style={sectionStyles.emptyText}>Nenhum cliente cadastrado.</Text>
                            <TouchableOpacity
                                style={[sectionStyles.addButton, { opacity: 1 }]}
                                onPress={() => setModalVisible(true)}
                            >
                                <Text style={sectionStyles.addButtonText}>+ Adicionar cliente</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

                {/* Dados expandidos */}
                {clientData && expanded && (
                    <>
                        <View style={sectionStyles.divider} />
                        <View style={sectionStyles.body}>
                            <View style={clientDataStyles.dataRow}>
                                <Text style={clientDataStyles.label}>Nome</Text>
                                <Text style={clientDataStyles.value}>{clientData.name}</Text>
                            </View>
                            <View style={clientDataStyles.dataRow}>
                                <Text style={clientDataStyles.label}>WhatsApp</Text>
                                <Text style={clientDataStyles.value}>{clientData.whatsapp_contact || '—'}</Text>
                            </View>
                            {/* Botão de edição */}
                            <TouchableOpacity
                                style={clientDataStyles.editButton}
                                onPress={() => setModalVisible(true)}
                            >
                                <Text style={clientDataStyles.editButtonText}>Editar cliente</Text>
                            </TouchableOpacity>
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
