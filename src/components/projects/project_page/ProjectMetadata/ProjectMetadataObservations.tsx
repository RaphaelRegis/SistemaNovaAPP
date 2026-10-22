import { Text, View } from "react-native";
import { projectMetadataStyles as styles } from '@/styles/projects/project_page/ProjectPage.style';

interface ObservationsProps {
    observations: string;
}

export default function ProjectMetadataObservations({ observations }: ObservationsProps) {
    return (
        <View>
            <Text style={styles.observations}>Obs: {observations}</Text>
        </View>
    )
}