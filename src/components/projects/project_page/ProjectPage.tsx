import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import ProjectMetadata from "./ProjectMetadata";
import ClientData from "./ClientData";
import AddressList from "./AddressList";
import ProductList from "./ProductList";
import ProjectActions from "./ProjectActions";
import { FullProject } from "@/entities/projects/Project";
import { mainService } from "@/services/projects/projects.service";
import ServiceList from "./ServiceList";
import { DefaultProjectPageContainer } from "@/styles/projects/project_page/ProjectPage.style";

export default function ProjectPage() {
    const [fullProject, setFullProject] = useState<FullProject | null>(null);

    useEffect(() => {
        mainService.getFullProject().then(setFullProject);
    }, []);

    if (!fullProject) {
        return (
            <View style={DefaultProjectPageContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={DefaultProjectPageContainer}>
            <ProjectMetadata projectData={fullProject.project_data} />
            <ClientData clientData={fullProject.client_data} />
            <AddressList addresses={fullProject.address_list} />
            <ProductList products={fullProject.product_list} />
            <ServiceList services={fullProject.service_list} />
            <ProjectActions />
        </View>
    );
}