import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ProjectData } from '@/entities/projects/Project';
import { projectInfoStyles as styles } from '@/styles/projects/projects_main/ProjectMain.style';

// Habilita LayoutAnimation no Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ProjectInfoProps {
    project: ProjectData;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded((prev) => !prev);
    }, []);

    return (
        <View style={styles.card}>
            {/* Linha principal: nome + chevron */}
            <TouchableOpacity style={styles.header} onPress={toggleExpand} activeOpacity={0.7}>
                <Text style={styles.name}>{project.project_name}</Text>
                <Text style={styles.chevron}>{expanded ? '▲' : '▼'}</Text>
            </TouchableOpacity>

            {/* Detalhes expandíveis */}
            {expanded && (
                <View style={styles.details}>
                    <DetailRow label="Status" value={project.done ? 'Concluído ✓' : 'Em andamento'} />
                    <DetailRow label="Valor total" value={`R$ ${project.total_value}`} />
                    <DetailRow label="Início" value={project.start_date || '—'} />
                    <DetailRow label="Término" value={project.end_date || '—'} />
                    <DetailRow
                        label="Pagamento"
                        value={project.payment_methods.join(', ') || '—'}
                    />
                    {project.observations ? (
                        <DetailRow label="Observações" value={project.observations} />
                    ) : null}
                </View>
            )}

            {/* Rodapé: botão de atualizar */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.updateButton} disabled>
                    <Text style={styles.updateButtonText}>Atualizar projeto</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function DetailRow({ label, value }: { label: string; value: string }) {
    return (
        <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>{label}:</Text>
            <Text style={styles.detailValue}>{value}</Text>
        </View>
    );
}