import { View } from "react-native";
import ProjectData from "./ProjectData";
import ClientData from "./ClientData";
import AddressList from "./AddressList";
import ProductList from "./ProductList";
import ProjectActions from "./ProjectActions";

export default function ProjectPage() {
    return (
        <View>
            <ProjectData />
            <ClientData />
            <AddressList />
            <ProductList />
            <ProjectActions />
        </View>
    );
}