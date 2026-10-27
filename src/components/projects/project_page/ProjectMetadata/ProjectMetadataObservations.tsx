import { Text, View } from "react-native";
import { projectMetadataStyles } from "@/styles/projects/project_page/ProjectMetadata.style";

interface ObservationsProps {
    observations: string;
}

export default function ProjectMetadataObservations({ observations }: ObservationsProps) {
    return (
        <View>
            <Text style={projectMetadataStyles.observations}>Obs: {observations}</Text>
        </View>
    )
}