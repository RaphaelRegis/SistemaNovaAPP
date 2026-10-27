import { StyleSheet } from 'react-native';

const bottomBarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingBottom: 4,
    },
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

export const DefaultBottomBarContainer = bottomBarStyles.container;
export const BottomBarNavButtonContainer = bottomBarStyles.button;
export const BottomBarNavButtonIcon = bottomBarStyles.icon;
export const BottomBarNavButtonIconActive = bottomBarStyles.iconActive;
export const BottomBarNavButtonLabel = bottomBarStyles.label;
export const BottomBarNavButtonLabelActive = bottomBarStyles.labelActive;