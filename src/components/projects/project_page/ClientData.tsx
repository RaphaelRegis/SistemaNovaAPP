import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ClientData } from '@/entities/projects/Project';
import {
    sectionStyles,
    clientDataStyles,
} from '@/styles/projects/project_page/ProjectPage.style';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ClientDataProps {
    clientData: ClientData | null;
}

export default function ClientDataView({ clientData }: ClientDataProps) {
    const [expanded, setExpanded] = useState(false);

    const toggle = useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded((prev) => !prev);
    }, []);

    return (
        <View style={sectionStyles.wrapper}>
            <TouchableOpacity style={sectionStyles.header} onPress={toggle} activeOpacity={0.7}>
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

            {!clientData && (
                <>
                    <View style={sectionStyles.divider} />
                    <View style={sectionStyles.emptyContainer}>
                        <Text style={sectionStyles.emptyText}>Nenhum cliente cadastrado.</Text>
                        <TouchableOpacity style={sectionStyles.addButton} disabled>
                            <Text style={sectionStyles.addButtonText}>+ Adicionar cliente</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}

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
                    </View>
                </>
            )}
        </View>
    );
}
