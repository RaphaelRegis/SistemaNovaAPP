import { Text, View } from "react-native";
import { Project } from "@/app/entities/projects/Project";

interface ProjectInfoProps {
    project: Project;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
    return (
        <View>
            <Text>{project.project_name}</Text>
        </View>
    )
}