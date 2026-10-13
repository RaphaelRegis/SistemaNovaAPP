import { Text, View } from "react-native";
import { ProjectData } from "@/app/entities/projects/Project";

interface ProjectInfoProps {
    project: ProjectData;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
    return (
        <View>
            <Text>{project.project_name}</Text>
        </View>
    )
}