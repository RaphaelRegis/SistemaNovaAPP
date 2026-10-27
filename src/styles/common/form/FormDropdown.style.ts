import { StyleSheet } from 'react-native';

const formDropdownStyle = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.25)',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    menuWrapper: {
        borderRadius: 10,
        overflow: 'hidden',
    },
});

export const DefaultBackdropContainer = formDropdownStyle.backdrop;
export const DefaultMenuContainer = formDropdownStyle.menuWrapper;