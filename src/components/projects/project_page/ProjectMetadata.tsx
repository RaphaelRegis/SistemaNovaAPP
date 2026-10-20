import { Text, View } from "react-native";
import { ProjectData } from "@/entities/projects/Project";
import { DefaultProjectMetadataContainer } from "@/styles/projects/project_page/ProjectPage.style"

interface ProjectMetadataProps {
    projectData: ProjectData;
}

export default function ProjectMetadata({ projectData }: ProjectMetadataProps) {
    return (
        <View style={DefaultProjectMetadataContainer}>
            <Text>{projectData.project_name}</Text>
        </View>
    );
}