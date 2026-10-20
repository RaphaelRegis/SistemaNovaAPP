import { Service } from "@/entities/projects/Project";
import { Text, View } from "react-native";
import { DefaultServiceListContainer } from "@/styles/projects/project_page/ProjectPage.style"

interface ServiceListProps {
    services: Service[];
}

export default function ServiceList({ services }: ServiceListProps) {
    return (
        <View style={DefaultServiceListContainer}>
            {services.map((service) => (
                <Text key={service.id}>{service.description}</Text>
            ))}
        </View>
    );
}