import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Service } from '@/entities/projects/Project';
import {
    sectionStyles,
    serviceListStyles as styles,
} from '@/styles/projects/project_page/ProjectPage.style';
import EditModal from '@/components/common/modal/EditModal';
import ServiceForm from './forms/ServiceForm';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ServiceListProps {
    services: Service[];
    onUpdate?: (services: Service[]) => void;
}

export default function ServiceList({ services, onUpdate }: ServiceListProps) {
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
                <TouchableOpacity
                    style={sectionStyles.header}
                    onPress={toggle}
                    activeOpacity={isEmpty ? 1 : 0.7}
                >
                    <View style={sectionStyles.headerLeft}>
                        <Text style={sectionStyles.headerTitle}>Serviços</Text>
                        {!isEmpty && (
                            <Text style={sectionStyles.headerCount}>({services.length})</Text>
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
                            <Text style={sectionStyles.emptyText}>Nenhum serviço cadastrado.</Text>
                            <TouchableOpacity
                                style={[sectionStyles.addButton, { opacity: 1 }]}
                                onPress={() => setEditingService('new')}
                            >
                                <Text style={sectionStyles.addButtonText}>+ Adicionar serviço</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

                {/* Lista expandida */}
                {!isEmpty && expanded && (
                    <>
                        <View style={sectionStyles.divider} />
                        <View style={sectionStyles.body}>
                            {services.map((service, index) => (
                                <View
                                    key={service.id}
                                    style={[
                                        styles.serviceItem,
                                        index === services.length - 1 && { borderBottomWidth: 0 },
                                    ]}
                                >
                                    {/* Descrição + Preço */}
                                    <View style={styles.serviceHeader}>
                                        <Text style={styles.serviceDescription}>{service.description}</Text>
                                        <Text style={styles.servicePrice}>R$ {service.price}</Text>
                                    </View>

                                    {/* Status */}
                                    <View style={service.done ? styles.serviceDoneTag : styles.servicePendingTag}>
                                        <Text style={service.done ? styles.serviceDoneTagText : styles.servicePendingTagText}>
                                            {service.done ? '✓ Concluído' : '⏳ Pendente'}
                                        </Text>
                                    </View>

                                    {/* Observações */}
                                    {service.observations ? (
                                        <Text style={styles.serviceObs}>{service.observations}</Text>
                                    ) : null}

                                    {/* Botão de editar serviço */}
                                    <TouchableOpacity
                                        style={styles.editButton}
                                        onPress={() => setEditingService(service)}
                                    >
                                        <Text style={styles.editButtonText}>Editar serviço</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}

                            {/* Botão de adicionar serviço */}
                            <TouchableOpacity
                                style={styles.editButton}
                                onPress={() => setEditingService('new')}
                            >
                                <Text style={styles.editButtonText}>+ Novo serviço</Text>
                            </TouchableOpacity>
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