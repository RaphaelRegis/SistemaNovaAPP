import { Text, TouchableOpacity, View } from "react-native";
import { sectionStyles } from "@/styles/projects/project_page/ProjectPage.style";

interface ServiceDataEmptyListStateProps {
    onClick: () => void;
}

export default function ServiceDataEmptyListState({ onClick }: ServiceDataEmptyListStateProps) {

    return (
        <>
            <View style={sectionStyles.divider} />
            <View style={sectionStyles.emptyContainer}>
                <Text style={sectionStyles.emptyText}>Nenhum serviço cadastrado.</Text>
                <TouchableOpacity
                    style={[sectionStyles.addButton, { opacity: 1 }]}
                    onPress={onClick}
                >
                    <Text style={sectionStyles.addButtonText}>+ Adicionar serviço</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}