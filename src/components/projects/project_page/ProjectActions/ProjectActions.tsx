import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { projectActionsPageStyles } from '@/styles/projects/project_page/ProjectActions.style';

export default function ProjectActions() {
    return (
        <View style={projectActionsPageStyles.container}>
            <TouchableOpacity style={projectActionsPageStyles.deleteButton} disabled>
                <Text style={projectActionsPageStyles.deleteButtonText}>Excluir projeto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={projectActionsPageStyles.saveButton} disabled>
                <Text style={projectActionsPageStyles.saveButtonText}>Salvar alterações</Text>
            </TouchableOpacity>
        </View>
    );
}