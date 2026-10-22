import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ProjectMetadata from './ProjectMetadata/ProjectMetadata';
import ClientData from './ClientData/ClientData';
import AddressList from './AddressList';
import ProductList from './ProductList';
import ProjectActions from './ProjectActions';
import { FullProject } from '@/entities/projects/Project';
import { mainService } from '@/services/projects/projects.service';
import ServiceList from './ServiceList';
import { projectPageStyles as styles } from '@/styles/projects/project_page/ProjectPage.style';

export default function ProjectPage() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [fullProject, setFullProject] = useState<FullProject | null>(null);

    useEffect(() => {
        mainService.getFullProject(id).then(setFullProject);
    }, [id]);

    if (!fullProject) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <ProjectMetadata projectData={fullProject.project_data} />
                <ClientData clientData={fullProject.client_data ?? null} />
                <AddressList addresses={fullProject.address_list} />
                <ProductList products={fullProject.product_list} />
                <ServiceList services={fullProject.service_list} />
            </ScrollView>
            <ProjectActions />
        </View>
    );
}