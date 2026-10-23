import { TouchableOpacity, Text, View } from "react-native";
import { sectionStyles } from "@/styles/projects/project_page/ProjectPage.style";

interface ProductDataEmptyListStateProps {
    onAdd: () => void;
}

export default function ProductDataEmptyListState({ onAdd }: ProductDataEmptyListStateProps) {
    return (
        <>
            <View style={sectionStyles.divider} />
            <View style={sectionStyles.emptyContainer}>
                <Text style={sectionStyles.emptyText}>Nenhum produto cadastrado.</Text>
                <TouchableOpacity
                    style={[sectionStyles.addButton, { opacity: 1 }]}
                    onPress={onAdd}
                >
                    <Text style={sectionStyles.addButtonText}>+ Adicionar produto</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}