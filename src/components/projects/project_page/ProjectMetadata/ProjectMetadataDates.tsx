import { Text, View } from "react-native";
import { projectMetadataStyles } from '@/styles/projects/project_page/ProjectMetadata.style';

interface DateProps {
    startDate: string;
    endDate?: string;
}


export default function ProjectMetadataDates({ startDate, endDate }: DateProps) {
    return (
        <>
            <View
                style={projectMetadataStyles.infoRow}
            >
                <Text style={projectMetadataStyles.infoLabel}>Início</Text>
                <Text style={projectMetadataStyles.infoValue}>{startDate}</Text>
            </View>
            {endDate && (
                <View style={projectMetadataStyles.infoRow}>
                    <Text style={projectMetadataStyles.infoLabel}>Término</Text>
                    <Text style={projectMetadataStyles.infoValue}>{endDate}</Text>
                </View>
            )}
        </>
    )
}