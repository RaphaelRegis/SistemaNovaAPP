import { Text, View } from "react-native";
import { projectMetadataStyles as styles } from '@/styles/projects/project_page/ProjectPage.style';

interface DateProps {
    startDate: string;
    endDate?: string;
}


export default function ProjectMetadataDates({ startDate, endDate }: DateProps) {
    return (
        <>
            <View
                style={styles.infoRow}
            >
                <Text style={styles.infoLabel}>Início</Text>
                <Text style={styles.infoValue}>{startDate}</Text>
            </View>
            {endDate && (
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Término</Text>
                    <Text style={styles.infoValue}>{endDate}</Text>
                </View>
            )}
        </>
    )
}