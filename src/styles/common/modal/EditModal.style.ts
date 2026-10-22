import { StyleSheet } from 'react-native';

export const editModalStyles = StyleSheet.create({
    /* ── Overlay ── */
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.45)',
        justifyContent: 'flex-end',
    },

    /* ── Sheet container ── */
    sheet: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: '90%',
        paddingBottom: 24,
    },

    /* ── Handle / drag indicator ── */
    handle: {
        width: 40,
        height: 4,
        backgroundColor: '#ddd',
        borderRadius: 2,
        alignSelf: 'center',
        marginTop: 12,
        marginBottom: 4,
    },

    /* ── Header ── */
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        color: '#1a1a2e',
    },
    closeButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButtonText: {
        fontSize: 16,
        color: '#555',
        lineHeight: 20,
    },

    /* ── Content area (scrollable inside sheet) ── */
    content: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 8,
    },
});
