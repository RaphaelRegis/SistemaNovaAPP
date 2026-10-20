import { StyleSheet } from 'react-native';

export const searchBarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 14,
    },
    button: {
        backgroundColor: '#4a90e2',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
});

export const searchFiltersStyles = StyleSheet.create({
    container: {
        gap: 8,
    },
    filterGroup: {
        gap: 4,
    },
    filterLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#555',
    },
    chips: {
        flexDirection: 'row',
        gap: 6,
        flexWrap: 'wrap',
    },
    chip: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    chipActive: {
        backgroundColor: '#4a90e2',
        borderColor: '#4a90e2',
    },
    chipText: {
        fontSize: 13,
        color: '#444',
    },
    chipTextActive: {
        color: '#fff',
        fontWeight: '600',
    },
    dateRow: {
        flexDirection: 'row',
        gap: 8,
    },
    dateInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        fontSize: 13,
    },
});

export const DefaultSearchBarContainer = searchBarStyles.container;
export const DefaultSearchFiltersContainer = searchFiltersStyles.container;