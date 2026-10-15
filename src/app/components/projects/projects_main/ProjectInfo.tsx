import { Text, View } from "react-native";
import { ProjectData } from "@/app/entities/projects/Project";
import { DefaultProjectInfoContainer } from "@/app/styles/projects/projects_main/ProjectMain.style"

interface ProjectInfoProps {
    project: ProjectData;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
    return (
        <View style={DefaultProjectInfoContainer}>
            <Text>{project.project_name}</Text>
        </View>
    )
}