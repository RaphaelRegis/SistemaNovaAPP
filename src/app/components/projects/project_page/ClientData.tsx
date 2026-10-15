import { Text, View } from "react-native";
import { ClientData } from "@/app/entities/projects/Project";

interface ClientDataProps {
    clientData: ClientData;
}

export default function ClientData({ clientData }: ClientDataProps) {
    return (
        <View>
            <Text>{clientData.name}</Text>
        </View>
    );
}