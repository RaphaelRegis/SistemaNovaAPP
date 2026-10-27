import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ClientData } from '@/entities/projects/Project';
import { formStyles as styles } from '@/styles/common/form/EditForm.style';

interface ClientDataFormProps {
    initialData: ClientData | null;
    onConfirm: (data: ClientData) => void;
}

export default function ClientDataForm({ initialData, onConfirm }: ClientDataFormProps) {
    const [name, setName] = useState(initialData?.name ?? '');
    const [whatsapp, setWhatsapp] = useState(initialData?.whatsapp_contact ?? '');

    const handleConfirm = () => {
        onConfirm({
            id: initialData?.id ?? '',
            name: name.trim(),
            whatsapp_contact: whatsapp.trim(),
        });
    };

    return (
        <View>
            {/* Nome */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Nome do cliente</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Nome completo"
                    placeholderTextColor="#bbb"
                    returnKeyType="next"
                />
            </View>

            {/* WhatsApp */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>WhatsApp</Text>
                <TextInput
                    style={styles.input}
                    value={whatsapp}
                    onChangeText={setWhatsapp}
                    placeholder="(00) 00000-0000"
                    placeholderTextColor="#bbb"
                    keyboardType="phone-pad"
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
