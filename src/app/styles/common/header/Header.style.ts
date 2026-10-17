import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#222',
    },
});

export const DefaultHeaderContainer = headerStyles.container;
export const DefaultHeaderTitle = headerStyles.title;
