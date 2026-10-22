import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Address } from '@/entities/projects/Project';
import { formStyles as styles } from '@/styles/common/modal/EditForm.style';

interface AddressFormProps {
    initialData: Address | null;
    onConfirm: (data: Address) => void;
}

export default function AddressForm({ initialData, onConfirm }: AddressFormProps) {
    const [city, setCity] = useState(initialData?.city ?? '');
    const [address, setAddress] = useState(initialData?.address ?? '');

    const handleConfirm = () => {
        onConfirm({
            id: initialData?.id ?? '',
            city: city.trim(),
            address: address.trim(),
        });
    };

    return (
        <View>
            {/* Cidade */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Cidade</Text>
                <TextInput
                    style={styles.input}
                    value={city}
                    onChangeText={setCity}
                    placeholder="Cidade"
                    placeholderTextColor="#bbb"
                    returnKeyType="next"
                />
            </View>

            {/* Endereço */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Endereço</Text>
                <TextInput
                    style={[styles.input, styles.inputMultiline]}
                    value={address}
                    onChangeText={setAddress}
                    placeholder="Rua, número, complemento..."
                    placeholderTextColor="#bbb"
                    multiline
                    returnKeyType="done"
                />
            </View>

            {/* Confirmar */}
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm} activeOpacity={0.8}>
                <Text style={styles.confirmButtonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}
