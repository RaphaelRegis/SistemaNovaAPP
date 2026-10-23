import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { projectActionsStyles as styles, DefaultProjectActionsContainer } from '@/styles/projects/projects_main/ProjectMain.style';

export default function ProjectsActions() {
    return (
        <View style={DefaultProjectActionsContainer}>
            <TouchableOpacity style={styles.createButton} disabled>
                <Text style={styles.createButtonText}>+ Novo Projeto</Text>
            </TouchableOpacity>
        </View>
    );
}