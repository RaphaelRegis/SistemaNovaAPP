import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { Service } from '@/entities/projects/Project';
import { formStyles as styles } from '@/styles/common/modal/EditForm.style';

interface ServiceFormProps {
    initialData: Service | null;
    onConfirm: (data: Service) => void;
}

export default function ServiceForm({ initialData, onConfirm }: ServiceFormProps) {
    const [description, setDescription] = useState(initialData?.description ?? '');
    const [price, setPrice] = useState(initialData?.price ?? '');
    const [observations, setObservations] = useState(initialData?.observations ?? '');
    const [done, setDone] = useState(initialData?.done ?? false);

    const handleConfirm = () => {
        onConfirm({
            id: initialData?.id ?? '',
            description: description.trim(),
            price: price.trim(),
            observations: observations.trim(),
            done,
        });
    };

    return (
        <View>
            {/* Descrição */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Descrição do serviço</Text>
                <TextInput
                    style={[styles.input, styles.inputMultiline]}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Descreva o serviço..."
                    placeholderTextColor="#bbb"
                    multiline
                    returnKeyType="next"
                />
            </View>

            {/* Preço */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Preço (R$)</Text>
                <TextInput
                    style={styles.input}
                    value={price}
                    onChangeText={setPrice}
                    placeholder="0,00"
                    placeholderTextColor="#bbb"
                    keyboardType="decimal-pad"
                    returnKeyType="next"
                />
            </View>

            {/* Status */}
            <View style={styles.fieldGroup}>
                <View style={styles.toggleRow}>
                    <Text style={styles.toggleLabel}>Serviço concluído</Text>
                    <Switch value={done} onValueChange={setDone} />
                </View>
            </View>

            {/* Observações */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Observações</Text>
                <TextInput
                    style={[styles.input, styles.inputMultiline]}
                    value={observations}
                    onChangeText={setObservations}
                    placeholder="Observações do serviço..."
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
