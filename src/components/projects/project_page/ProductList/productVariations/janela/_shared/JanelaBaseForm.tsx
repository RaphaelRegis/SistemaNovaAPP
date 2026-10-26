/**
 * JanelaBaseForm — campos comuns a todas as variantes de janela:
 * alturas, larguras, cor do material, tipo do vidro, cor do vidro.
 *
 * Importado por cada variante (duasFolhas, tresFolhas, quatroFolhas, vitro).
 * Recebe e emite JanelaBaseData para que o form pai (ProductDataForm) possa
 * compor com o campo `variant`.
 */
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {
    JANELA_COR_MATERIAL,
    JANELA_TIPO_VIDRO,
    JANELA_COR_VIDRO,
    JanelaCorMaterial,
    JanelaTipoVidro,
    JanelaCorVidro,
} from '@/entities/projects/Project';
import { formStyles as styles } from '@/styles/common/modal/EditForm.style';

export interface JanelaBaseData {
    heights: string[];
    widths: string[];
    corMaterial: JanelaCorMaterial | '';
    tipoVidro: JanelaTipoVidro | '';
    corVidro: JanelaCorVidro | '';
}

export function defaultJanelaBaseData(): JanelaBaseData {
    return { heights: [''], widths: [''], corMaterial: '', tipoVidro: '', corVidro: '' };
}

/** Valida se os dados base de janela estão completos para habilitar o Salvar */
export function isJanelaBaseValid(d: JanelaBaseData): boolean {
    const hasHeight = d.heights.some((h) => h.trim() !== '');
    const hasWidth = d.widths.some((w) => w.trim() !== '');
    return hasHeight && hasWidth && d.corMaterial !== '' && d.tipoVidro !== '' && d.corVidro !== '';
}

interface JanelaBaseFormProps {
    data: JanelaBaseData;
    onChange: (data: JanelaBaseData) => void;
}

export default function JanelaBaseForm({ data, onChange }: JanelaBaseFormProps) {
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
                    {JANELA_COR_MATERIAL.map((v) => (
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
                    {JANELA_TIPO_VIDRO.map((v) => (
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
                    {JANELA_COR_VIDRO.map((v) => (
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
