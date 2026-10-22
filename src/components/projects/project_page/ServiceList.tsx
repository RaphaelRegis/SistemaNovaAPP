import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Service } from '@/entities/projects/Project';
import {
    sectionStyles,
    serviceListStyles as styles,
} from '@/styles/projects/project_page/ProjectPage.style';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ServiceListProps {
    services: Service[];
}

export default function ServiceList({ services }: ServiceListProps) {
    const [expanded, setExpanded] = useState(false);
    const isEmpty = services.length === 0;

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

            {isEmpty && (
                <>
                    <View style={sectionStyles.divider} />
                    <View style={sectionStyles.emptyContainer}>
                        <Text style={sectionStyles.emptyText}>Nenhum serviço cadastrado.</Text>
                        <TouchableOpacity style={sectionStyles.addButton} disabled>
                            <Text style={sectionStyles.addButtonText}>+ Adicionar serviço</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}

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
                                <TouchableOpacity style={styles.editButton}>
                                    <Text style={styles.editButtonText}>Editar serviço</Text>
                                </TouchableOpacity>
                            </View>
                        ))}

                        {/* Botão de adicionar serviço */}
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={styles.editButtonText}>+ Novo serviço</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
}