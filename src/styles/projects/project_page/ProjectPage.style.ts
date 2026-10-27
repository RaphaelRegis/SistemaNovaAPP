import { StyleSheet } from 'react-native';

export const projectPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContent: {
        paddingBottom: 100,
    },
});

/* ─── Seção colapsável genérica ─── */
export const sectionStyles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        marginBottom: 8,
        borderRadius: 0,
        overflow: 'hidden',
        elevation: 1,
        shadowColor: '#000',
        shadowOpacity: 0.04,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: '#fff',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flex: 1,
    },
    headerTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1a1a2e',
    },
    headerCount: {
        fontSize: 12,
        color: '#999',
        fontWeight: '400',
    },
    chevron: {
        fontSize: 12,
        color: '#aaa',
    },
    emptyContainer: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 13,
        color: '#bbb',
        fontStyle: 'italic',
        marginBottom: 8,
    },
    addButton: {
        borderWidth: 1,
        borderColor: '#4a90e2',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderStyle: 'dashed',
        opacity: 0.5,
    },
    addButtonText: {
        fontSize: 13,
        color: '#4a90e2',
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: '#f4f4f4',
        marginHorizontal: 16,
    },
    body: {
        paddingHorizontal: 16,
        paddingBottom: 14,
        paddingTop: 10,
        gap: 6,
    },
});