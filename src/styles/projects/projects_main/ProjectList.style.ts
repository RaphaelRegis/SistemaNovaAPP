import { StyleSheet } from 'react-native';

export const projectListStyles = StyleSheet.create({
    content: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    empty: {
        alignItems: 'center',
        marginTop: 40,
    },
    emptyText: {
        color: '#999',
        fontSize: 14,
    },
});

export const projectInfoStyles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
        flex: 1,
    },
    chevron: {
        fontSize: 12,
        color: '#888',
        marginLeft: 8,
    },
    details: {
        paddingHorizontal: 16,
        paddingBottom: 12,
        gap: 4,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    detailRow: {
        flexDirection: 'row',
        gap: 6,
        paddingVertical: 2,
    },
    detailLabel: {
        fontSize: 13,
        color: '#665',
        fontWeight: '500',
    },
    detailValue: {
        fontSize: 13,
        color: '#333',
        flex: 1,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    updateButton: {
        borderWidth: 1,
        borderColor: '#4a90e2',
        borderRadius: 8,
        paddingVertical: 6,
        alignItems: 'center',
    },
    updateButtonText: {
        fontSize: 13,
        color: '#4a90e2',
        fontWeight: '600',
    },
});