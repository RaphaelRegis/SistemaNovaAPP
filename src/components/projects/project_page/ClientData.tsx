import { Text, View } from "react-native";
import { ClientData } from "@/entities/projects/Project";
import { DefaultClientDataContainer } from "@/styles/projects/project_page/ProjectPage.style"

interface ClientDataProps {
    clientData: ClientData;
}

export default function ClientDataView({ clientData }: ClientDataProps) {
    return (
        <View style={DefaultClientDataContainer}>
            <Text>{clientData.name}</Text>
        </View>
    );
}
