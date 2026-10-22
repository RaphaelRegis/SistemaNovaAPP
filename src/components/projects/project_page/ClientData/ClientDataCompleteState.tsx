import { View, Text } from "react-native";
import { clientDataStyles } from "@/styles/projects/project_page/ProjectPage.style";
import { ClientData } from "@/entities/projects/Project";


interface ClientDataCompleteStateProps {
    clientData: ClientData;
}

export default function ClientDataCompleteState({ clientData }: ClientDataCompleteStateProps) {
    return <>
        <View style={clientDataStyles.dataRow}>
            <Text style={clientDataStyles.label}>Nome</Text>
            <Text style={clientDataStyles.value}>{clientData.name}</Text>
        </View>
        <View style={clientDataStyles.dataRow}>
            <Text style={clientDataStyles.label}>WhatsApp</Text>
            <Text style={clientDataStyles.value}>{clientData.whatsapp_contact || '—'}</Text>
        </View>
    </>
}