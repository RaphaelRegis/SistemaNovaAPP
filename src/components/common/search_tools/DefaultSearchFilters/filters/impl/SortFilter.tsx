import { FilterConfig } from "@/entities/common/search_tools/SearchConfig";
import { defaultSearchFiltersStyles } from "@/styles/common/search_tools/DefaultSearchFilters.style";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function SortFilter({ filter, value, onUpdate }: { filter: FilterConfig; value: string | undefined; onUpdate: (v: unknown) => void; }) {
    return (
        <View style={defaultSearchFiltersStyles.filterGroup}>
            <Text style={defaultSearchFiltersStyles.filterLabel}>{filter.label}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={defaultSearchFiltersStyles.chips}>
                {filter.sortOptions?.map((opt) => {
                    const active = value === opt.value;
                    return (
                        <TouchableOpacity
                            key={opt.value}
                            style={[defaultSearchFiltersStyles.chip, active && defaultSearchFiltersStyles.chipActive]}
                            onPress={() => onUpdate(active ? undefined : opt.value)}
                        >
                            <Text style={[defaultSearchFiltersStyles.chipText, active && defaultSearchFiltersStyles.chipTextActive]}>{opt.label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}