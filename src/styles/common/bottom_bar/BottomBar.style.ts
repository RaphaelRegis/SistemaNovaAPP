import { StyleSheet } from 'react-native';

export const defaultBottomBarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingBottom: 4,
    }
});

export const bottomBarNavButtonStyles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
        gap: 2,
    },
    icon: {
        fontSize: 20,
        opacity: 0.5,
    },
    iconActive: {
        opacity: 1,
    },
    label: {
        fontSize: 11,
        color: '#999',
    },
    labelActive: {
        color: '#4a90e2',
        fontWeight: '600',
    },
});