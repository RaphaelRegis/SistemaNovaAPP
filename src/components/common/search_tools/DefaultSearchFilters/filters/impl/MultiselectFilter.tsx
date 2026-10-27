import { FilterConfig } from "@/entities/common/search_tools/SearchConfig";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { defaultSearchFiltersStyles } from "@/styles/common/search_tools/DefaultSearchFilters.style";

export default function MultiselectFilter({ filter, value, onUpdate }: { filter: FilterConfig; value: string[] | undefined; onUpdate: (v: unknown) => void; }) {
    const selected = value ?? [];

    const toggle = (optValue: string) => {
        const next = selected.includes(optValue)
            ? selected.filter((s) => s !== optValue)
            : [...selected, optValue];
        onUpdate(next);
    };

    return (
        <View style={defaultSearchFiltersStyles.filterGroup}>
            <Text style={defaultSearchFiltersStyles.filterLabel}>{filter.label}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={defaultSearchFiltersStyles.chips}>
                {filter.options?.map((opt) => {
                    const active = selected.includes(opt.value);
                    return (
                        <TouchableOpacity
                            key={opt.value}
                            style={[defaultSearchFiltersStyles.chip, active && defaultSearchFiltersStyles.chipActive]}
                            onPress={() => toggle(opt.value)}
                        >
                            <Text style={[defaultSearchFiltersStyles.chipText, active && defaultSearchFiltersStyles.chipTextActive]}>{opt.label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}