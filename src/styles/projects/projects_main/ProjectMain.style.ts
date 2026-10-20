import { StyleSheet } from 'react-native';

export const projectMainStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: '#e74c3c',
        fontSize: 14,
    },
});

export const projectsSearchAreaStyles = StyleSheet.create({
    container: {
        gap: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
});

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
        color: '#666',
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
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 6,
        alignItems: 'center',
        opacity: 0.5,
    },
    updateButtonText: {
        fontSize: 13,
        color: '#555',
    },
});

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

export const DefaultProjectMainContainer = projectMainStyles.container;
export const DefaultProjectsSearchAreaContainer = projectsSearchAreaStyles.container;
export const DefaultProjectListContainer = projectListStyles.content;
export const DefaultProjectInfoContainer = projectInfoStyles.card;
export const DefaultProjectActionsContainer = projectActionsStyles.container;