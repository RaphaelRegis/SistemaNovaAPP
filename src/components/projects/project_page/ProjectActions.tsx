import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { projectActionsPageStyles as styles } from '@/styles/projects/project_page/ProjectPage.style';

export default function ProjectActions() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.deleteButton} disabled>
                <Text style={styles.deleteButtonText}>Excluir projeto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} disabled>
                <Text style={styles.saveButtonText}>Salvar alterações</Text>
            </TouchableOpacity>
        </View>
    );
}