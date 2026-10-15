import { Text, View } from "react-native";
import { ProjectData } from "@/app/entities/projects/Project";

interface ProjectMetadataProps {
    projectData: ProjectData;
}

export default function ProjectMetadata({ projectData }: ProjectMetadataProps) {
    return (
        <View>
            <Text>{projectData.project_name}</Text>
        </View>
    );
}