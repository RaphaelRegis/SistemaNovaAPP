import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { Product } from '@/entities/projects/Project';
import { formStyles as styles } from '@/styles/common/modal/EditForm.style';

interface ProductFormProps {
    initialData: Product | null;
    onConfirm: (data: Product) => void;
}

export default function ProductForm({ initialData, onConfirm }: ProductFormProps) {
    const [name, setName] = useState(initialData?.name ?? '');
    const [price, setPrice] = useState(initialData?.price ?? '');
    const [observations, setObservations] = useState(initialData?.observations ?? '');
    const [done, setDone] = useState(initialData?.done ?? false);
    const [heights, setHeights] = useState<string[]>(initialData?.heights ?? ['']);
    const [widths, setWidths] = useState<string[]>(initialData?.widths ?? ['']);

    /* ── Helpers para dimensões ── */
    const updateHeight = (value: string, index: number) => {
        const updated = [...heights];
        updated[index] = value;
        setHeights(updated);
    };
    const addHeight = () => setHeights((prev) => [...prev, '']);
    const removeHeight = (index: number) => setHeights((prev) => prev.filter((_, i) => i !== index));

    const updateWidth = (value: string, index: number) => {
        const updated = [...widths];
        updated[index] = value;
        setWidths(updated);
    };
    const addWidth = () => setWidths((prev) => [...prev, '']);
    const removeWidth = (index: number) => setWidths((prev) => prev.filter((_, i) => i !== index));

    const handleConfirm = () => {
        onConfirm({
            id: initialData?.id ?? '',
            name: name.trim(),
            price: price.trim(),
            observations: observations.trim(),
            done,
            heights: heights.map((h) => h.trim()).filter(Boolean),
            widths: widths.map((w) => w.trim()).filter(Boolean),
        });
    };

    return (
        <View>
            {/* Nome */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Nome do produto</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Ex: Janela, Porta..."
                    placeholderTextColor="#bbb"
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

            {/* Alturas */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Alturas (m)</Text>
                {heights.map((h, i) => (
                    <View key={i} style={styles.dimRow}>
                        <TextInput
                            style={styles.dimInput}
                            value={h}
                            onChangeText={(v) => updateHeight(v, i)}
                            placeholder="0.00"
                            placeholderTextColor="#bbb"
                            keyboardType="decimal-pad"
                        />
                        <Text style={styles.dimUnit}>m</Text>
                        {heights.length > 1 && (
                            <TouchableOpacity style={styles.dimRemoveButton} onPress={() => removeHeight(i)}>
                                <Text style={styles.dimRemoveText}>−</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
                <TouchableOpacity style={styles.addDimButton} onPress={addHeight}>
                    <Text style={styles.addDimText}>+ Adicionar altura</Text>
                </TouchableOpacity>
            </View>

            {/* Larguras */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Larguras (m)</Text>
                {widths.map((w, i) => (
                    <View key={i} style={styles.dimRow}>
                        <TextInput
                            style={styles.dimInput}
                            value={w}
                            onChangeText={(v) => updateWidth(v, i)}
                            placeholder="0.00"
                            placeholderTextColor="#bbb"
                            keyboardType="decimal-pad"
                        />
                        <Text style={styles.dimUnit}>m</Text>
                        {widths.length > 1 && (
                            <TouchableOpacity style={styles.dimRemoveButton} onPress={() => removeWidth(i)}>
                                <Text style={styles.dimRemoveText}>−</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
                <TouchableOpacity style={styles.addDimButton} onPress={addWidth}>
                    <Text style={styles.addDimText}>+ Adicionar largura</Text>
                </TouchableOpacity>
            </View>

            {/* Status */}
            <View style={styles.fieldGroup}>
                <View style={styles.toggleRow}>
                    <Text style={styles.toggleLabel}>Produto concluído</Text>
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
                    placeholder="Observações do produto..."
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
