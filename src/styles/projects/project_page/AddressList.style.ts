import { StyleSheet } from 'react-native';

export const addressListStyles = StyleSheet.create({
    addressItem: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4',
        gap: 2,
    },
    addressCity: {
        fontSize: 13,
        fontWeight: '600',
        color: '#444',
    },
    addressText: {
        fontSize: 13,
        color: '#666',
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