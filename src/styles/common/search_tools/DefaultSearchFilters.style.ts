import { StyleSheet } from 'react-native';



export const defaultSearchFiltersContainerStyles = StyleSheet.create({
    container: {
        gap: 8,
    }
});

// campos comuns dos filtros
const commonAttributtes = StyleSheet.create({
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
})

export const booleanFilterStyle = StyleSheet.create({
    filterGroup: commonAttributtes.filterGroup,
    chip: commonAttributtes.chip,
    chipActive: commonAttributtes.chipActive,
    chipText: commonAttributtes.chipText,
    chipTextActive: commonAttributtes.chipTextActive,
})

export const dateRangeFilterStyle = StyleSheet.create({
    filterGroup: commonAttributtes.filterGroup,
    filterLabel: commonAttributtes.filterLabel,
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
})

export const multiSelectFilterStyle = StyleSheet.create({
    filterGroup: commonAttributtes.filterGroup,
    filterLabel: commonAttributtes.filterLabel,
    chips: commonAttributtes.chips,
    chip: commonAttributtes.chip,
    chipActive: commonAttributtes.chipActive,
    chipText: commonAttributtes.chipText,
    chipTextActive: commonAttributtes.chipTextActive,
})

export const sortFilterStyle = StyleSheet.create({
    filterGroup: commonAttributtes.filterGroup,
    filterLabel: commonAttributtes.filterLabel,
    chips: commonAttributtes.chips,
    chip: commonAttributtes.chip,
    chipActive: commonAttributtes.chipActive,
    chipText: commonAttributtes.chipText,
    chipTextActive: commonAttributtes.chipTextActive,
})