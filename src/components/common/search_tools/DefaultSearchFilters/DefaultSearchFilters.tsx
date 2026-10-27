import React, { useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {
    SearchFiltersConfig,
    FilterConfig,
    FilterValues,
} from '@/entities/common/search_tools/SearchConfig';
import { defaultSearchFiltersContainerStyles } from '@/styles/common/search_tools/DefaultSearchFilters.style';
import FilterItem from './filters/strategy/FilterItem';

interface DefaultSearchFiltersProps {
    config: SearchFiltersConfig;
    values: FilterValues;
    onChange: (values: FilterValues) => void;
}

export default function DefaultSearchFilters({ config, values, onChange }: DefaultSearchFiltersProps) {
    const updateFilter = useCallback(
        (key: string, value: unknown) => {
            onChange({ ...values, [key]: value });
        },
        [values, onChange]
    );

    return (
        <View style={defaultSearchFiltersContainerStyles.container}>
            {config.filters.map((filter) => (
                <FilterItem
                    key={filter.key}
                    filter={filter}
                    value={values[filter.key]}
                    onUpdate={(val) => updateFilter(filter.key, val)}
                />
            ))}
        </View>
    );
}
