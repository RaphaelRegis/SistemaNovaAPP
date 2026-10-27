import { Text, TouchableOpacity } from "react-native";
import { commonEditButtonStyles } from '@/styles/projects/project_page/Common.style';

interface EditButtonProps {
    onPress: () => void;
    text: string;
}

export default function ProjectPageCommonEditButton({ onPress, text }: EditButtonProps) {
    return (
        <TouchableOpacity style={commonEditButtonStyles.editButton} onPress={onPress}>
            <Text style={commonEditButtonStyles.editButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}