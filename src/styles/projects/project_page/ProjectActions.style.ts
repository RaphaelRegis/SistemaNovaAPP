import { StyleSheet } from 'react-native';

export const projectActionsPageStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    saveButton: {
        flex: 1,
        backgroundColor: '#4a90e2',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        opacity: 0.5,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 14,
    },
    deleteButton: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e74c3c',
        opacity: 0.5,
    },
    deleteButtonText: {
        color: '#e74c3c',
        fontWeight: '700',
        fontSize: 14,
    },
});