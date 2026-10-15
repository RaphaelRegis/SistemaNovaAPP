import { Service } from "@/app/entities/projects/Project";
import { Text, View } from "react-native";

interface ServiceListProps {
    services: Service[];
}

export default function ServiceList({ services }: ServiceListProps) {
    return (
        <View>
            {services.map((service) => (
                <Text key={service.id}>{service.description}</Text>
            ))}
        </View>
    );
}