import { StyleSheet } from 'react-native';

export const formStyles = StyleSheet.create({
    /* ── Campo genérico ── */
    fieldGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 13,
        fontWeight: '600',
        color: '#555',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 10,
        fontSize: 14,
        color: '#1a1a2e',
    },
    inputMultiline: {
        minHeight: 80,
        textAlignVertical: 'top',
    },

    /* ── Toggle / checkbox row ── */
    toggleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    toggleLabel: {
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
    },

    /* ── Tags / chips (ex: métodos de pagamento) ── */
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 4,
    },
    chip: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        backgroundColor: '#fff',
    },
    chipSelected: {
        backgroundColor: '#4a90e2',
        borderColor: '#4a90e2',
    },
    chipText: {
        fontSize: 13,
        color: '#555',
        fontWeight: '500',
    },
    chipTextSelected: {
        color: '#fff',
    },

    /* ── Lista de dimensões (heights / widths) ── */
    dimRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 6,
    },
    dimInput: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 14,
        color: '#1a1a2e',
    },
    dimUnit: {
        fontSize: 13,
        color: '#888',
        width: 20,
    },
    dimRemoveButton: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#fde8e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dimRemoveText: {
        fontSize: 15,
        color: '#e74c3c',
        lineHeight: 18,
    },
    addDimButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        paddingVertical: 4,
        alignSelf: 'flex-start',
    },
    addDimText: {
        fontSize: 13,
        color: '#4a90e2',
        fontWeight: '600',
    },

    /* ── Divider ── */
    divider: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginVertical: 16,
    },

    /* ── Dropdown de seleção ── */
    dropdownButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#e9ecef',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 12,
    },
    dropdownButtonText: {
        fontSize: 14,
        color: '#1a1a2e',
        fontWeight: '500',
    },
    dropdownButtonPlaceholder: {
        fontSize: 14,
        color: '#bbb',
    },
    dropdownArrow: {
        fontSize: 11,
        color: '#aaa',
    },
    dropdownOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
    },
    dropdownMenu: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e9ecef',
        marginTop: 4,
        zIndex: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
    },
    dropdownItem: {
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4',
    },
    dropdownItemSelected: {
        backgroundColor: '#eef5fd',
    },
    dropdownItemText: {
        fontSize: 14,
        color: '#333',
    },
    dropdownItemTextSelected: {
        color: '#4a90e2',
        fontWeight: '600',
    },

    /* ── Botão de confirmação ── */
    confirmButton: {
        backgroundColor: '#4a90e2',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 4,
    },
    confirmButtonDisabled: {
        backgroundColor: '#b0c8ef',
    },
    confirmButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
    },
});
