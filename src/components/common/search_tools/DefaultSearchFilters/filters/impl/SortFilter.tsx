import { FilterConfig } from "@/entities/common/search_tools/SearchConfig";
import { sortFilterStyle } from "@/styles/common/search_tools/DefaultSearchFilters.style";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function SortFilter({ filter, value, onUpdate }: { filter: FilterConfig; value: string | undefined; onUpdate: (v: unknown) => void; }) {
    return (
        <View style={sortFilterStyle.filterGroup}>
            <Text style={sortFilterStyle.filterLabel}>{filter.label}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={sortFilterStyle.chips}>
                {filter.sortOptions?.map((opt) => {
                    const active = value === opt.value;
                    return (
                        <TouchableOpacity
                            key={opt.value}
                            style={[sortFilterStyle.chip, active && sortFilterStyle.chipActive]}
                            onPress={() => onUpdate(active ? undefined : opt.value)}
                        >
                            <Text style={[sortFilterStyle.chipText, active && sortFilterStyle.chipTextActive]}>{opt.label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}