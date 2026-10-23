import { FilterConfig } from "@/entities/common/search_tools/SearchConfig";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { searchFiltersStyles as styles } from "@/styles/common/search_tools/SearchTools.style";

export default function MultiselectFilter({ filter, value, onUpdate }: { filter: FilterConfig; value: string[] | undefined; onUpdate: (v: unknown) => void; }) {
    const selected = value ?? [];

    const toggle = (optValue: string) => {
        const next = selected.includes(optValue)
            ? selected.filter((s) => s !== optValue)
            : [...selected, optValue];
        onUpdate(next);
    };

    return (
        <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>{filter.label}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
                {filter.options?.map((opt) => {
                    const active = selected.includes(opt.value);
                    return (
                        <TouchableOpacity
                            key={opt.value}
                            style={[styles.chip, active && styles.chipActive]}
                            onPress={() => toggle(opt.value)}
                        >
                            <Text style={[styles.chipText, active && styles.chipTextActive]}>{opt.label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}