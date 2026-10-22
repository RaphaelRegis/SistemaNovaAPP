import { ScrollView, Text, View } from "react-native";
import { projectMetadataStyles as styles } from "@/styles/projects/project_page/ProjectPage.style";

interface BadgesProps {
    isDone: boolean;
    paymentMethods: string[];
}

export default function Badges({ isDone, paymentMethods }: BadgesProps) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.badgeRow}
        >
            <View style={[styles.badge, isDone ? styles.badgeDone : styles.badgePending]}>
                <Text style={[styles.badgeText, isDone ? styles.badgeDoneText : styles.badgePendingText]}>
                    {isDone ? '✓ Concluído' : '⏳ Em andamento'}
                </Text>
            </View>

            {paymentMethods.map((method) => (
                <View key={method} style={styles.paymentBadge}>
                    <Text style={styles.paymentBadgeText}>{method}</Text>
                </View>
            ))}
        </ScrollView>
    )
}