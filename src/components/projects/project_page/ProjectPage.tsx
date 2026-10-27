import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ProjectMetadata from './ProjectMetadata/ProjectMetadata';
import ClientData from './ClientData/ClientData';
import AddressData from './AddressList/AddressData';
import ProductData from './ProductList/ProductData';
import ProjectActions from './ProjectActions/ProjectActions';
import { FullProject } from '@/entities/projects/Project';
import { mainService } from '@/services/projects/projects.service';
import ServiceData from './ServiceList/ServiceData';
import { projectPageStyles } from '@/styles/projects/project_page/ProjectPage.style';

export default function ProjectPage() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [fullProject, setFullProject] = useState<FullProject | null>(null);

    useEffect(() => {
        mainService.getFullProject(id).then(setFullProject);
    }, [id]);

    if (!fullProject) {
        return (
            <View style={projectPageStyles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={projectPageStyles.container}>
            <ScrollView contentContainerStyle={projectPageStyles.scrollContent}>
                <ProjectMetadata projectData={fullProject.project_data} />
                <ClientData clientData={fullProject.client_data ?? null} />
                <AddressData addresses={fullProject.address_list} />
                <ProductData products={fullProject.product_list} />
                <ServiceData services={fullProject.service_list} />
            </ScrollView>
            <ProjectActions />
        </View>
    );
}