import { ScrollView, Text, View } from "react-native";
import { projectMetadataStyles } from "@/styles/projects/project_page/ProjectMetadata.style";

interface BadgesProps {
    isDone: boolean;
    paymentMethods: string[];
}

export default function Badges({ isDone, paymentMethods }: BadgesProps) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={projectMetadataStyles.badgeRow}
        >
            <View style={[projectMetadataStyles.badge, isDone ? projectMetadataStyles.badgeDone : projectMetadataStyles.badgePending]}>
                <Text style={[projectMetadataStyles.badgeText, isDone ? projectMetadataStyles.badgeDoneText : projectMetadataStyles.badgePendingText]}>
                    {isDone ? '✓ Concluído' : '⏳ Em andamento'}
                </Text>
            </View>

            {paymentMethods.map((method) => (
                <View key={method} style={projectMetadataStyles.paymentBadge}>
                    <Text style={projectMetadataStyles.paymentBadgeText}>{method}</Text>
                </View>
            ))}
        </ScrollView>
    )
}