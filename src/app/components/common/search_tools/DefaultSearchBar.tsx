import React, { useState, useCallback } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { SearchBarConfig, SearchPayload, FilterValues } from '@/app/entities/common/search_tools/SearchConfig';
import { searchBarStyles as styles } from '@/app/styles/common/search_tools/SearchTools.style';

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
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={config.placeholder}
                value={query}
                onChangeText={setQuery}
                onSubmitEditing={handleSearch}
                returnKeyType="search"
            />
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
        </View>
    );
}