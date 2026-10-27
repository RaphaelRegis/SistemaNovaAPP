import { StyleSheet } from 'react-native';

export const clientDataStyles = StyleSheet.create({
    dataRow: {
        flexDirection: 'row',
        gap: 6,
        paddingVertical: 2,
        alignItems: 'center',
    },
    label: {
        fontSize: 13,
        color: '#888',
        fontWeight: '500',
        minWidth: 80,
    },
    value: {
        fontSize: 13,
        color: '#333',
        flex: 1,
    },
    editButton: {
        marginTop: 12,
        backgroundColor: '#f8f9fa',
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e9ecef',
    },
    editButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#343a40',
        textAlign: 'center',
    },
});