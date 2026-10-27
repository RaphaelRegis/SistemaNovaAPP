import { StyleSheet } from 'react-native';

const overlayStyle = StyleSheet.create({
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

export const DefaultOverlayStyle = overlayStyle.backdrop;
export const DefaultOverlayMenuStyle = overlayStyle.menuWrapper;