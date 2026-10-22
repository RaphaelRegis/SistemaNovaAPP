import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ProjectData } from '@/entities/projects/Project';
import { projectMetadataStyles as styles } from '@/styles/projects/project_page/ProjectPage.style';
import EditModal from '@/components/common/modal/EditModal';
import ProjectMetadataForm from './ProjectMetadataForm';
import Badges from './ProjectMetadataBadges';
import ProjectMetadataDates from './ProjectMetadataDates';
import ProjectMetadataObservations from './ProjectMetadataObservations';
import ProjectPageCommonEditButton from '../common/ProjectPageCommonEditButton';

interface ProjectMetadataProps {
    projectData: ProjectData;
    onUpdate?: (data: ProjectData) => void;
}

export default function ProjectMetadata({ projectData, onUpdate }: ProjectMetadataProps) {
    const [modalVisible, setModalVisible] = useState(false);

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
                <Badges
                    isDone={projectData.done}
                    paymentMethods={projectData.payment_methods}
                />

                {/* Datas */}
                <ProjectMetadataDates
                    startDate={projectData.start_date}
                    endDate={projectData.end_date}
                />

                {/* Valor total */}
                <Text style={styles.totalValue}>R$ {projectData.total_value}</Text>

                {/* Observações */}
                {projectData.observations && <ProjectMetadataObservations observations={projectData.observations} />}

                {/* Botão de edição */}
                <ProjectPageCommonEditButton
                    onPress={() => setModalVisible(true)}
                    text="Atualizar informações"
                />
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