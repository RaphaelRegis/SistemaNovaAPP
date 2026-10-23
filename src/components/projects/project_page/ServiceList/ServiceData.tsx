import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Service } from '@/entities/projects/Project';
import {
    sectionStyles,
    serviceListStyles as styles,
} from '@/styles/projects/project_page/ProjectPage.style';
import EditModal from '@/components/common/modal/EditModal';
import ServiceForm from './ServiceDataForm';
import ServiceDataEmptyListState from './ServiceDataEmptyListState';
import ProjectPageCommonEditButton from '../common/ProjectPageCommonEditButton';
import ServiceDataServiceList from './ServiceDataServiceList';
import ProjectPageCommonDropdown from '../common/ProjectPageCommonDropdown';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ServiceListProps {
    services: Service[];
    onUpdate?: (services: Service[]) => void;
}

export default function ServiceData({ services, onUpdate }: ServiceListProps) {
    const [expanded, setExpanded] = useState(false);
    const isEmpty = services.length === 0;

    /* Modal state: null = fechado; 'new' = novo; Service = editar existente */
    const [editingService, setEditingService] = useState<Service | null | 'new'>(null);
    const modalVisible = editingService !== null;

    const toggle = useCallback(() => {
        if (isEmpty) return;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded((prev) => !prev);
    }, [isEmpty]);

    const handleConfirm = (data: Service) => {
        if (!onUpdate) { setEditingService(null); return; }

        if (editingService === 'new') {
            onUpdate([...services, { ...data, id: Date.now().toString() }]);
        } else {
            onUpdate(services.map((s) => (s.id === data.id ? data : s)));
        }
        setEditingService(null);
    };

    const initialFormData: Service | null =
        editingService === 'new' ? null : (editingService as Service | null);

    return (
        <>
            <View style={sectionStyles.wrapper}>
                <ProjectPageCommonDropdown
                    title="Serviços"
                    count={services.length}
                    onPress={toggle}
                    expanded={expanded}
                    chevron
                />

                {/* Estado vazio */}
                {isEmpty && (
                    <ServiceDataEmptyListState onClick={() => setEditingService('new')} />
                )}

                {/* Lista expandida */}
                {!isEmpty && expanded && (
                    <>
                        <View style={sectionStyles.divider} />
                        <View style={sectionStyles.body}>
                            <ServiceDataServiceList
                                services={services}
                                onUpdate={(service) => setEditingService(service)}
                            />
                            {/* Botão de adicionar serviço */}
                            <ProjectPageCommonEditButton
                                onPress={() => setEditingService('new')}
                                text='Novo serviço'
                            />
                        </View>
                    </>
                )}
            </View>

            <EditModal
                title={editingService === 'new' ? 'Novo serviço' : 'Editar serviço'}
                visible={modalVisible}
                onClose={() => setEditingService(null)}
            >
                {modalVisible && (
                    <ServiceForm initialData={initialFormData} onConfirm={handleConfirm} />
                )}
            </EditModal>
        </>
    );
}