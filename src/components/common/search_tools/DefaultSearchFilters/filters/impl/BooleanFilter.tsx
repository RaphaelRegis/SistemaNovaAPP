import { FilterConfig } from "@/entities/common/search_tools/SearchConfig";
import { searchFiltersStyles as styles } from "@/styles/common/search_tools/SearchTools.style";
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
        <View style={styles.filterGroup}>
            <TouchableOpacity style={[styles.chip, active && styles.chipActive]} onPress={cycle}>
                <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
}