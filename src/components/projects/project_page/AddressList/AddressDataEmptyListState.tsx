import { sectionStyles } from "@/styles/projects/project_page/ProjectPage.style";
import { Text, TouchableOpacity, View } from "react-native";

interface AddressDataEmptyListStateProps {
    onAdd: () => void;
}

export default function AddressDataEmptyListState({ onAdd }: AddressDataEmptyListStateProps) {
    return (
        <>
            <View style={sectionStyles.divider} />
            <View style={sectionStyles.emptyContainer}>
                <Text style={sectionStyles.emptyText}>Nenhum endereço cadastrado.</Text>
                <TouchableOpacity
                    style={[sectionStyles.addButton, { opacity: 1 }]}
                    onPress={onAdd}
                >
                    <Text style={sectionStyles.addButtonText}>+ Adicionar endereço</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}