import { useState, useCallback } from 'react';
import { View, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ClientData } from '@/entities/projects/Project';
import { sectionStyles } from '@/styles/projects/project_page/ProjectPage.style';
import EditModal from '@/components/common/modal/EditModal';
import ClientDataForm from './ClientDataForm';
import ClientDataEmptyState from './ClientDataEmptyState';
import ClientDataCompleteState from './ClientDataCompleteState';
import ProjectPageCommonEditButton from '../common/ProjectPageCommonEditButton';
import ProjectPageCommonDropdown from '../common/ProjectPageCommonDropdown';

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

                <ProjectPageCommonDropdown
                    title="Cliente"
                    count={clientData ? 1 : undefined}
                    onPress={toggle}
                    expanded={expanded}
                    chevron={clientData !== null}
                />

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
