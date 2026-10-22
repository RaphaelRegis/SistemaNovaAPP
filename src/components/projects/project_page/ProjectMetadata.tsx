import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ProjectData } from '@/entities/projects/Project';
import { projectMetadataStyles as styles } from '@/styles/projects/project_page/ProjectPage.style';
import EditModal from '@/components/common/modal/EditModal';
import ProjectMetadataForm from './forms/ProjectMetadataForm';

interface ProjectMetadataProps {
    projectData: ProjectData;
    onUpdate?: (data: ProjectData) => void;
}

export default function ProjectMetadata({ projectData, onUpdate }: ProjectMetadataProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const hasDates = projectData.start_date || projectData.end_date;

    const handleConfirm = (data: ProjectData) => {
        onUpdate?.(data);
        setModalVisible(false);
    };

    return (
        <>
            <View style={styles.card}>
                {/* Nome do projeto */}
                <Text style={styles.projectName}>{projectData.project_name}</Text>

                {/* Badges: status + métodos de pagamento */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.badgeRow}
                >
                    <View style={[styles.badge, projectData.done ? styles.badgeDone : styles.badgePending]}>
                        <Text style={[styles.badgeText, projectData.done ? styles.badgeDoneText : styles.badgePendingText]}>
                            {projectData.done ? '✓ Concluído' : '⏳ Em andamento'}
                        </Text>
                    </View>

                    {projectData.payment_methods.map((method) => (
                        <View key={method} style={styles.paymentBadge}>
                            <Text style={styles.paymentBadgeText}>{method}</Text>
                        </View>
                    ))}
                </ScrollView>

                {/* Datas */}
                {hasDates && (
                    <>
                        {projectData.start_date ? (
                            <View style={styles.infoRow}>
                                <Text style={styles.infoLabel}>Início</Text>
                                <Text style={styles.infoValue}>{projectData.start_date}</Text>
                            </View>
                        ) : null}
                        {projectData.end_date ? (
                            <View style={styles.infoRow}>
                                <Text style={styles.infoLabel}>Término</Text>
                                <Text style={styles.infoValue}>{projectData.end_date}</Text>
                            </View>
                        ) : null}
                    </>
                )}

                {/* Valor total */}
                <Text style={styles.totalValue}>R$ {projectData.total_value}</Text>

                {/* Observações */}
                {projectData.observations ? (
                    <Text style={styles.observations}>Obs: {projectData.observations}</Text>
                ) : null}

                {/* Botão de edição */}
                <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.editButtonText}>Atualizar informações</Text>
                </TouchableOpacity>
            </View>

            <EditModal
                title="Informações do projeto"
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            >
                <ProjectMetadataForm
                    initialData={projectData}
                    onConfirm={handleConfirm}
                />
            </EditModal>
        </>
    );
}