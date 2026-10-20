import { StyleSheet } from 'react-native';

/* ─── Página geral ─── */
export const projectPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContent: {
        paddingBottom: 100,
    },
});

/* ─── Metadados do projeto ─── */
export const projectMetadataStyles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    projectName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1a1a2e',
        marginBottom: 12,
    },
    badgeRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 12,
    },
    badge: {
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 3,
        alignSelf: 'flex-start',
    },
    badgeDone: {
        backgroundColor: '#d4edda',
    },
    badgePending: {
        backgroundColor: '#fff3cd',
    },
    badgeText: {
        fontSize: 12,
        fontWeight: '600',
    },
    badgeDoneText: {
        color: '#155724',
    },
    badgePendingText: {
        color: '#856404',
    },
    paymentBadge: {
        backgroundColor: '#e8f0fe',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    paymentBadgeText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#3a5fc8',
    },
    infoRow: {
        flexDirection: 'row',
        gap: 6,
        marginBottom: 4,
        alignItems: 'center',
    },
    infoLabel: {
        fontSize: 13,
        color: '#888',
        fontWeight: '500',
        minWidth: 60,
    },
    infoValue: {
        fontSize: 13,
        color: '#333',
        flex: 1,
        fontWeight: '500',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2ecc71',
        marginTop: 8,
    },
    observations: {
        fontSize: 13,
        color: '#666',
        fontStyle: 'italic',
        marginTop: 8,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
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

/* ─── ClientData ─── */
export const clientDataStyles = StyleSheet.create({
    dataRow: {
        flexDirection: 'row',
        gap: 6,
        paddingVertical: 2,
        alignItems: 'center',
    },
    label: {
        fontSize: 13,
        color: '#888',
        fontWeight: '500',
        minWidth: 80,
    },
    value: {
        fontSize: 13,
        color: '#333',
        flex: 1,
    },
});

/* ─── AddressList ─── */
export const addressListStyles = StyleSheet.create({
    addressItem: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4',
        gap: 2,
    },
    addressCity: {
        fontSize: 13,
        fontWeight: '600',
        color: '#444',
    },
    addressText: {
        fontSize: 13,
        color: '#666',
    },
});

/* ─── ProductList ─── */
export const productListStyles = StyleSheet.create({
    productItem: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4',
        gap: 4,
    },
    productHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        flex: 1,
    },
    productPrice: {
        fontSize: 14,
        fontWeight: '700',
        color: '#2ecc71',
    },
    productDimRow: {
        flexDirection: 'row',
        gap: 12,
    },
    productDimLabel: {
        fontSize: 12,
        color: '#999',
    },
    productDimValue: {
        fontSize: 12,
        color: '#555',
        fontWeight: '500',
    },
    productDoneTag: {
        alignSelf: 'flex-start',
        backgroundColor: '#d4edda',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    productDoneTagText: {
        fontSize: 11,
        color: '#155724',
        fontWeight: '600',
    },
    productPendingTag: {
        alignSelf: 'flex-start',
        backgroundColor: '#fff3cd',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    productPendingTagText: {
        fontSize: 11,
        color: '#856404',
        fontWeight: '600',
    },
    productObs: {
        fontSize: 12,
        color: '#999',
        fontStyle: 'italic',
    },
});

/* ─── ServiceList ─── */
export const serviceListStyles = StyleSheet.create({
    serviceItem: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4',
        gap: 4,
    },
    serviceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    serviceDescription: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        flex: 1,
    },
    servicePrice: {
        fontSize: 14,
        fontWeight: '700',
        color: '#2ecc71',
    },
    serviceDoneTag: {
        alignSelf: 'flex-start',
        backgroundColor: '#d4edda',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    serviceDoneTagText: {
        fontSize: 11,
        color: '#155724',
        fontWeight: '600',
    },
    servicePendingTag: {
        alignSelf: 'flex-start',
        backgroundColor: '#fff3cd',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    servicePendingTagText: {
        fontSize: 11,
        color: '#856404',
        fontWeight: '600',
    },
    serviceObs: {
        fontSize: 12,
        color: '#999',
        fontStyle: 'italic',
    },
});

/* ─── ProjectActions ─── */
export const projectActionsPageStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    saveButton: {
        flex: 1,
        backgroundColor: '#4a90e2',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        opacity: 0.5,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 14,
    },
    deleteButton: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e74c3c',
        opacity: 0.5,
    },
    deleteButtonText: {
        color: '#e74c3c',
        fontWeight: '700',
        fontSize: 14,
    },
});

/* ─── Exports de compatibilidade (containers simples) ─── */
export const DefaultProjectPageContainer = projectPageStyles.container;
export const DefaultProjectMetadataContainer = projectMetadataStyles.card;
export const DefaultClientDataContainer = sectionStyles.wrapper;
export const DefaultAddressesListContainer = sectionStyles.wrapper;
export const DefaultProductListContainer = sectionStyles.wrapper;
export const DefaultServiceListContainer = sectionStyles.wrapper;
export const DefaultProjectActionsContainer = projectActionsPageStyles.container;