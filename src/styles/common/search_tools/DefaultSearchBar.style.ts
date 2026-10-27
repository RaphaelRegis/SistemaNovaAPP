import { StyleSheet } from 'react-native';

export const defaultSearchBarStyles = StyleSheet.create({
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