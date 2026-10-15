import { Text, View } from "react-native";
import { ClientData } from "@/app/entities/projects/Project";
import { DefaultClientDataContainer } from "@/app/styles/projects/project_page/ProjectPage.style"

interface ClientDataProps {
    clientData: ClientData;
}

export default function ClientData({ clientData }: ClientDataProps) {
    return (
        <View style={DefaultClientDataContainer}>
            <Text>{clientData.name}</Text>
        </View>
    );
}