import { StyleSheet } from 'react-native';

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