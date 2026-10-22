import { Text, TouchableOpacity } from "react-native";
import { projectMetadataStyles as styles } from '@/styles/projects/project_page/ProjectPage.style';

interface EditButtonProps {
    onPress: () => void;
    text: string;
}

export default function ProjectPageCommonEditButton({ onPress, text }: EditButtonProps) {
    return (
        <TouchableOpacity style={styles.editButton} onPress={onPress}>
            <Text style={styles.editButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}