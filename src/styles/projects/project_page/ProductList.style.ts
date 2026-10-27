import { StyleSheet } from 'react-native';

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

export const itemStyles = StyleSheet.create({
    variantLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#4a90e2',
        marginBottom: 2,
        textTransform: 'uppercase',
        letterSpacing: 0.4,
    },
    specsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
        marginTop: 2,
    },
    specChip: {
        fontSize: 11,
        color: '#665',
        backgroundColor: '#f0f4fb',
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 8,
        overflow: 'hidden',
    },
});