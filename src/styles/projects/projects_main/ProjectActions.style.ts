import { StyleSheet } from 'react-native';

export const projectActionsStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    createButton: {
        backgroundColor: '#4a90e2',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        opacity: 0.5,
    },
    createButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
    },
});