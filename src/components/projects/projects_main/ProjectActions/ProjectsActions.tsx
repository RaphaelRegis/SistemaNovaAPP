import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { projectActionsStyles } from '@/styles/projects/projects_main/ProjectActions.style';

export default function ProjectsActions() {
    return (
        <View style={projectActionsStyles.container}>
            <TouchableOpacity style={projectActionsStyles.createButton} disabled>
                <Text style={projectActionsStyles.createButtonText}>+ Novo Projeto</Text>
            </TouchableOpacity>
        </View>
    );
}