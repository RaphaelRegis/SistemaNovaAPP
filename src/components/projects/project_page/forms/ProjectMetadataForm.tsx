import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { ProjectData } from '@/entities/projects/Project';
import { formStyles as styles } from '@/styles/common/modal/EditForm.style';

const PAYMENT_OPTIONS = ['pix', 'cartão', 'dinheiro', 'transferência', 'boleto'];

interface ProjectMetadataFormProps {
    initialData: ProjectData;
    onConfirm: (data: ProjectData) => void;
}

export default function ProjectMetadataForm({ initialData, onConfirm }: ProjectMetadataFormProps) {
    const [name, setName] = useState(initialData.project_name);
    const [done, setDone] = useState(initialData.done);
    const [totalValue, setTotalValue] = useState(initialData.total_value);
    const [startDate, setStartDate] = useState(initialData.start_date);
    const [endDate, setEndDate] = useState(initialData.end_date);
    const [observations, setObservations] = useState(initialData.observations);
    const [paymentMethods, setPaymentMethods] = useState<string[]>(initialData.payment_methods);

    const togglePayment = (method: string) => {
        setPaymentMethods((prev) =>
            prev.includes(method) ? prev.filter((m) => m !== method) : [...prev, method]
        );
    };

    const handleConfirm = () => {
        onConfirm({
            ...initialData,
            project_name: name.trim(),
            done,
            total_value: totalValue.trim(),
            start_date: startDate.trim(),
            end_date: endDate.trim(),
            observations: observations.trim(),
            payment_methods: paymentMethods,
        });
    };

    return (
        <View>
            {/* Nome */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Nome do projeto</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Nome do projeto"
                    placeholderTextColor="#bbb"
                    returnKeyType="next"
                />
            </View>

            {/* Valor total */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Valor total (R$)</Text>
                <TextInput
                    style={styles.input}
                    value={totalValue}
                    onChangeText={setTotalValue}
                    placeholder="0,00"
                    placeholderTextColor="#bbb"
                    keyboardType="decimal-pad"
                    returnKeyType="next"
                />
            </View>

            {/* Datas */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Data de início (dd/mm/aaaa)</Text>
                <TextInput
                    style={styles.input}
                    value={startDate}
                    onChangeText={setStartDate}
                    placeholder="dd/mm/aaaa"
                    placeholderTextColor="#bbb"
                    keyboardType="numeric"
                    returnKeyType="next"
                />
            </View>
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Data de término (dd/mm/aaaa)</Text>
                <TextInput
                    style={styles.input}
                    value={endDate}
                    onChangeText={setEndDate}
                    placeholder="dd/mm/aaaa"
                    placeholderTextColor="#bbb"
                    keyboardType="numeric"
                    returnKeyType="next"
                />
            </View>

            {/* Status */}
            <View style={styles.fieldGroup}>
                <View style={styles.toggleRow}>
                    <Text style={styles.toggleLabel}>Projeto concluído</Text>
                    <Switch value={done} onValueChange={setDone} />
                </View>
            </View>

            {/* Métodos de pagamento */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Métodos de pagamento</Text>
                <View style={styles.chipContainer}>
                    {PAYMENT_OPTIONS.map((method) => {
                        const selected = paymentMethods.includes(method);
                        return (
                            <TouchableOpacity
                                key={method}
                                style={[styles.chip, selected && styles.chipSelected]}
                                onPress={() => togglePayment(method)}
                                activeOpacity={0.7}
                            >
                                <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
                                    {method}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>

            {/* Observações */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Observações</Text>
                <TextInput
                    style={[styles.input, styles.inputMultiline]}
                    value={observations}
                    onChangeText={setObservations}
                    placeholder="Observações gerais..."
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
