import { FilterConfig } from "@/entities/common/search_tools/SearchConfig";
import { booleanFilterStyle } from "@/styles/common/search_tools/DefaultSearchFilters.style";
import { TouchableOpacity, View, Text } from "react-native";

export default function BooleanFilter({ filter, value, onUpdate }: {
    filter: FilterConfig; value: boolean | undefined; onUpdate: (v: unknown) => void;
}) {
    const cycle = () => {
        // undefined → true → false → undefined
        if (value === undefined) onUpdate(true);
        else if (value === true) onUpdate(false);
        else onUpdate(undefined);
    };

    const label =
        value === undefined ? filter.label : value ? `${filter.label}: Sim` : `${filter.label}: Não`;
    const active = value !== undefined;

    return (
        <View style={booleanFilterStyle.filterGroup}>
            <TouchableOpacity style={[booleanFilterStyle.chip, active && booleanFilterStyle.chipActive]} onPress={cycle}>
                <Text style={[booleanFilterStyle.chipText, active && booleanFilterStyle.chipTextActive]}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
}


// usa filterGroup, chip, chipActive, chipText, chipTextActive