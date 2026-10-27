import React, { useState, useCallback } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { SearchBarConfig, SearchPayload, FilterValues } from '@/entities/common/search_tools/SearchConfig';
import { defaultSearchBarStyles } from '@/styles/common/search_tools/DefaultSearchBar.style';

interface DefaultSearchBarProps {
    config: SearchBarConfig;
    currentFilters: FilterValues;
    onSearch: (payload: SearchPayload) => void;
}

export default function DefaultSearchBar({ config, currentFilters, onSearch }: DefaultSearchBarProps) {
    const [query, setQuery] = useState('');

    const handleSearch = useCallback(() => {
        onSearch({ query, filters: currentFilters });
    }, [query, currentFilters, onSearch]);

    return (
        <View style={defaultSearchBarStyles.container}>
            <TextInput
                style={defaultSearchBarStyles.input}
                placeholder={config.placeholder}
                value={query}
                onChangeText={setQuery}
                onSubmitEditing={handleSearch}
                returnKeyType="search"
            />
            <TouchableOpacity style={defaultSearchBarStyles.button} onPress={handleSearch}>
                <Text style={defaultSearchBarStyles.buttonText}>Buscar</Text>
            </TouchableOpacity>
        </View>
    );
}