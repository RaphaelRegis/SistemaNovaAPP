import { Text, TouchableOpacity, View } from "react-native";
import { sectionStyles } from "@/styles/projects/project_page/ProjectPage.style";

interface ClientDataEmptyStateProps {
    onAdd?: () => void;
}

export default function ClientDataEmptyState({ onAdd }: ClientDataEmptyStateProps) {
    return (
        <>
            <View style={sectionStyles.divider} />
            <View style={sectionStyles.emptyContainer}>
                <Text style={sectionStyles.emptyText}>Nenhum cliente cadastrado.</Text>
                <TouchableOpacity
                    style={[sectionStyles.addButton, { opacity: 1 }]}
                    onPress={onAdd}
                >
                    <Text style={sectionStyles.addButtonText}>+ Novo cliente</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}