/**
 * PortaBaseForm — campos comuns a todas as variantes de porta:
 * alturas, larguras, cor do material, tipo do vidro, cor do vidro.
 *
 * Importado por cada variante (social, pivotante, deslizante, dobradica, vidro).
 * Recebe e emite PortaBaseData para que o form pai (ProductDataForm) possa
 * compor com o campo `variant`.
 */
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {
    PORTA_COR_MATERIAL,
    PORTA_TIPO_VIDRO,
    PORTA_COR_VIDRO,
    PortaCorMaterial,
    PortaTipoVidro,
    PortaCorVidro,
} from '@/entities/projects/Project';
import { formStyles as styles } from '@/styles/common/form/EditForm.style';

export interface PortaBaseData {
    heights: string[];
    widths: string[];
    corMaterial: PortaCorMaterial | '';
    tipoVidro: PortaTipoVidro | '';
    corVidro: PortaCorVidro | '';
}

export function defaultPortaBaseData(): PortaBaseData {
    return { heights: [''], widths: [''], corMaterial: '', tipoVidro: '', corVidro: '' };
}

/** Valida se os dados base de porta estão completos para habilitar o Salvar */
export function isPortaBaseValid(d: PortaBaseData): boolean {
    const hasHeight = d.heights.some((h) => h.trim() !== '');
    const hasWidth = d.widths.some((w) => w.trim() !== '');
    return hasHeight && hasWidth && d.corMaterial !== '' && d.tipoVidro !== '' && d.corVidro !== '';
}

interface PortaBaseFormProps {
    data: PortaBaseData;
    onChange: (data: PortaBaseData) => void;
}

export default function PortaBaseForm({ data, onChange }: PortaBaseFormProps) {
    /* ── Helpers de dimensões ── */
    const updateHeight = (value: string, i: number) => {
        const updated = [...data.heights];
        updated[i] = value;
        onChange({ ...data, heights: updated });
    };
    const addHeight = () => onChange({ ...data, heights: [...data.heights, ''] });
    const removeHeight = (i: number) =>
        onChange({ ...data, heights: data.heights.filter((_, idx) => idx !== i) });

    const updateWidth = (value: string, i: number) => {
        const updated = [...data.widths];
        updated[i] = value;
        onChange({ ...data, widths: updated });
    };
    const addWidth = () => onChange({ ...data, widths: [...data.widths, ''] });
    const removeWidth = (i: number) =>
        onChange({ ...data, widths: data.widths.filter((_, idx) => idx !== i) });

    return (
        <View>
            {/* Altura */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Altura (m)</Text>
                {data.heights.map((h, i) => (
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
                        {data.heights.length > 1 && (
                            <TouchableOpacity
                                style={styles.dimRemoveButton}
                                onPress={() => removeHeight(i)}
                            >
                                <Text style={styles.dimRemoveText}>−</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
                <TouchableOpacity style={styles.addDimButton} onPress={addHeight}>
                    <Text style={styles.addDimText}>+ Adicionar altura</Text>
                </TouchableOpacity>
            </View>

            {/* Largura */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Largura (m)</Text>
                {data.widths.map((w, i) => (
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
                        {data.widths.length > 1 && (
                            <TouchableOpacity
                                style={styles.dimRemoveButton}
                                onPress={() => removeWidth(i)}
                            >
                                <Text style={styles.dimRemoveText}>−</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
                <TouchableOpacity style={styles.addDimButton} onPress={addWidth}>
                    <Text style={styles.addDimText}>+ Adicionar largura</Text>
                </TouchableOpacity>
            </View>

            {/* Cor do material */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Cor do material</Text>
                <View style={styles.chipContainer}>
                    {PORTA_COR_MATERIAL.map((v) => (
                        <TouchableOpacity
                            key={v}
                            style={[styles.chip, data.corMaterial === v && styles.chipSelected]}
                            onPress={() => onChange({ ...data, corMaterial: v })}
                            activeOpacity={0.75}
                        >
                            <Text
                                style={[
                                    styles.chipText,
                                    data.corMaterial === v && styles.chipTextSelected,
                                ]}
                            >
                                {v}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Tipo do vidro */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Tipo do vidro</Text>
                <View style={styles.chipContainer}>
                    {PORTA_TIPO_VIDRO.map((v) => (
                        <TouchableOpacity
                            key={v}
                            style={[styles.chip, data.tipoVidro === v && styles.chipSelected]}
                            onPress={() => onChange({ ...data, tipoVidro: v })}
                            activeOpacity={0.75}
                        >
                            <Text
                                style={[
                                    styles.chipText,
                                    data.tipoVidro === v && styles.chipTextSelected,
                                ]}
                            >
                                {v}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Cor do vidro */}
            <View style={styles.fieldGroup}>
                <Text style={styles.label}>Cor do vidro</Text>
                <View style={styles.chipContainer}>
                    {PORTA_COR_VIDRO.map((v) => (
                        <TouchableOpacity
                            key={v}
                            style={[styles.chip, data.corVidro === v && styles.chipSelected]}
                            onPress={() => onChange({ ...data, corVidro: v })}
                            activeOpacity={0.75}
                        >
                            <Text
                                style={[
                                    styles.chipText,
                                    data.corVidro === v && styles.chipTextSelected,
                                ]}
                            >
                                {v}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
}
