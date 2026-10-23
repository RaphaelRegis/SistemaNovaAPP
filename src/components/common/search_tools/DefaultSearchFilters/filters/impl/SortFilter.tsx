import { FilterConfig } from "@/entities/common/search_tools/SearchConfig";
import { searchFiltersStyles as styles } from "@/styles/common/search_tools/SearchTools.style";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function SortFilter({ filter, value, onUpdate }: { filter: FilterConfig; value: string | undefined; onUpdate: (v: unknown) => void; }) {
    return (
        <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>{filter.label}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
                {filter.sortOptions?.map((opt) => {
                    const active = value === opt.value;
                    return (
                        <TouchableOpacity
                            key={opt.value}
                            style={[styles.chip, active && styles.chipActive]}
                            onPress={() => onUpdate(active ? undefined : opt.value)}
                        >
                            <Text style={[styles.chipText, active && styles.chipTextActive]}>{opt.label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}