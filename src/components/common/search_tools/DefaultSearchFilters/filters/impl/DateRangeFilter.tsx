import { FilterConfig } from "@/entities/common/search_tools/SearchConfig";
import { searchFiltersStyles as styles } from "@/styles/common/search_tools/SearchTools.style";
import { Text, TextInput, View } from "react-native";

function formatDateInput(text: string): string {
    const cleaned = text.replace(/\D/g, '').slice(0, 8);
    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 4) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
}

export default function DateRangeFilter({ filter, value, onUpdate }: { filter: FilterConfig; value: { from?: string; to?: string } | undefined; onUpdate: (v: unknown) => void; }) {
    const from = value?.from ?? '';
    const to = value?.to ?? '';

    const handleFromChange = (t: string) => {
        const formatted = formatDateInput(t);
        onUpdate({ ...value, from: formatted });
    };

    const handleToChange = (t: string) => {
        const formatted = formatDateInput(t);
        onUpdate({ ...value, to: formatted });
    };

    return (
        <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>{filter.label}</Text>
            <View style={styles.dateRow}>
                <TextInput
                    style={styles.dateInput}
                    placeholder="De (dd/mm/aaaa)"
                    value={from}
                    onChangeText={handleFromChange}
                    keyboardType="numeric"
                    maxLength={10}
                />
                <TextInput
                    style={styles.dateInput}
                    placeholder="Até (dd/mm/aaaa)"
                    value={to}
                    onChangeText={handleToChange}
                    keyboardType="numeric"
                    maxLength={10}
                />
            </View>
        </View>
    );
}