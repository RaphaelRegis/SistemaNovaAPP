import { View } from "react-native";
import ProjectMetadata from "./ProjectMetadata";
import ClientData from "./ClientData";
import AddressList from "./AddressList";
import ProductList from "./ProductList";
import ProjectActions from "./ProjectActions";
import { FullProject } from "@/app/entities/projects/Project";
import { mainService } from "@/app/services/projects/projects.service";
import ServiceList from "./ServiceList";

const fullProject: FullProject = await mainService.getFullProject();

export default function ProjectPage() {
    return (
        <View>
            <ProjectMetadata projectData={fullProject.project_data} />
            <ClientData clientData={fullProject.client_data} />
            <AddressList addresses={fullProject.address_list} />
            <ProductList products={fullProject.product_list} />
            <ServiceList services={fullProject.service_list} />
            <ProjectActions />
        </View>
    );
}