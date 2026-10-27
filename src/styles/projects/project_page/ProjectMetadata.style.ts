import { StyleSheet } from "react-native";

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
    editButton: {
        marginTop: 12,
        backgroundColor: '#f8f9fa',
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e9ecef',
    },
    editButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#343a40',
        textAlign: 'center',
    },
});