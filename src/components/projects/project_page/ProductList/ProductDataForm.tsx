import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import {
    Product,
    ProductType,
    PRODUCT_TYPES,
    JanelaVariantData,
    JanelaVariantKey,
    JANELA_VARIANTS,
    PortaVariantData,
    PortaVariantKey,
    PORTA_VARIANTS,
} from '@/entities/projects/Project';
import { formStyles as styles } from '@/styles/common/form/EditForm.style';
import FormDropdown from '@/components/common/form/FormDropdown';
import JanelaForm from './productVariations/janela/JanelaForm';
import { isJanelaBaseValid } from './productVariations/janela/_shared/JanelaBaseForm';
import PortaForm from './productVariations/portas/PortaForm';
import { isPortaBaseValid, defaultPortaBaseData } from './productVariations/portas/_shared/PortaBaseForm';

interface ProductFormProps {
    initialData: Product | null;
    onConfirm: (data: Product) => void;
}

function defaultJanelaData(variant: JanelaVariantKey = 'duasFolhas'): JanelaVariantData {
    return { variant, heights: [''], widths: [''], corMaterial: '', tipoVidro: '', corVidro: '' };
}

function defaultPortaData(variant: PortaVariantKey = 'social'): PortaVariantData {
    return { variant, heights: [''], widths: [''], corMaterial: '', tipoVidro: '', corVidro: '' };
}

export default function ProductForm({ initialData, onConfirm }: ProductFormProps) {
    /* ── Tipo de produto ── */
    const [productType, setProductType] = useState<ProductType | null>(
        initialData?.product_type ?? null
    );

    /* ── Variante de janela ── */
    const [janelaVariant, setJanelaVariant] = useState<JanelaVariantKey | null>(
        initialData?.janela_data?.variant ?? null
    );
    const [janelaData, setJanelaData] = useState<JanelaVariantData>(
        initialData?.janela_data ?? defaultJanelaData()
    );

    /* ── Variante de porta ── */
    const [portaVariant, setPortaVariant] = useState<PortaVariantKey | null>(
        initialData?.porta_data?.variant ?? null
    );
    const [portaData, setPortaData] = useState<PortaVariantData>(
        initialData?.porta_data ?? defaultPortaData()
    );

    /* ── Campos genéricos ── */
    const [name, setName] = useState(initialData?.name ?? '');
    const [price, setPrice] = useState(initialData?.price ?? '');
    const [observations, setObservations] = useState(initialData?.observations ?? '');
    const [done, setDone] = useState(initialData?.done ?? false);
    const [heights, setHeights] = useState<string[]>(initialData?.heights ?? ['']);
    const [widths, setWidths] = useState<string[]>(initialData?.widths ?? ['']);

    /* ── Alturas / larguras genéricas ── */
    const updateHeight = (value: string, index: number) => {
        const updated = [...heights]; updated[index] = value; setHeights(updated);
    };
    const addHeight = () => setHeights((prev) => [...prev, '']);
    const removeHeight = (index: number) => setHeights((prev) => prev.filter((_, i) => i !== index));

    const updateWidth = (value: string, index: number) => {
        const updated = [...widths]; updated[index] = value; setWidths(updated);
    };
    const addWidth = () => setWidths((prev) => [...prev, '']);
    const removeWidth = (index: number) => setWidths((prev) => prev.filter((_, i) => i !== index));

    /* ── Troca de tipo: reseta variantes ── */
    const handleProductTypeChange = (type: ProductType) => {
        setProductType(type);
        setJanelaVariant(null);
        setJanelaData(defaultJanelaData());
        setPortaVariant(null);
        setPortaData(defaultPortaData());
        setName('');
    };

    /* ── Troca de variante de janela ── */
    const handleJanelaVariantChange = (v: JanelaVariantKey) => {
        setJanelaVariant(v);
        setJanelaData(
            initialData?.janela_data?.variant === v ? initialData.janela_data : defaultJanelaData(v)
        );
    };

    /* ── Troca de variante de porta ── */
    const handlePortaVariantChange = (v: PortaVariantKey) => {
        setPortaVariant(v);
        setPortaData(
            initialData?.porta_data?.variant === v ? initialData.porta_data : defaultPortaData(v)
        );
    };

    /* ── Nome derivado ── */
    const derivedName = (): string => {
        if (productType === 'janela' && janelaVariant) {
            return `Janela ${JANELA_VARIANTS.find((v) => v.key === janelaVariant)?.label ?? ''}`;
        }
        if (productType === 'porta' && portaVariant) {
            return PORTA_VARIANTS.find((v) => v.key === portaVariant)?.label ?? 'Porta';
        }
        return name.trim();
    };

    /* ── Validação ── */
    const isValid = useMemo((): boolean => {
        const hasPrice = price.trim() !== '';

        if (productType === 'janela') {
            if (!janelaVariant) return false;
            return hasPrice && isJanelaBaseValid(janelaData);
        }
        if (productType === 'porta') {
            if (!portaVariant) return false;
            return hasPrice && isPortaBaseValid(portaData);
        }
        if (productType === 'generic') {
            const hasName = name.trim() !== '';
            const hasHeight = heights.some((h) => h.trim() !== '');
            const hasWidth = widths.some((w) => w.trim() !== '');
            return hasName && hasPrice && hasHeight && hasWidth;
        }
        return false;
    }, [productType, janelaVariant, janelaData, portaVariant, portaData, price, name, heights, widths]);

    /* ── Confirmar ── */
    const handleConfirm = () => {
        if (!isValid || !productType) return;

        const base: Product = {
            id: initialData?.id ?? '',
            product_type: productType,
            name: derivedName(),
            price: price.trim(),
            observations: observations.trim(),
            done,
            heights: productType === 'generic' ? heights.map((h) => h.trim()).filter(Boolean) : [],
            widths: productType === 'generic' ? widths.map((w) => w.trim()).filter(Boolean) : [],
        };

        if (productType === 'janela') {
            base.janela_data = {
                ...janelaData,
                heights: janelaData.heights.map((h) => h.trim()).filter(Boolean),
                widths: janelaData.widths.map((w) => w.trim()).filter(Boolean),
            };
        }
        if (productType === 'porta') {
            base.porta_data = {
                ...portaData,
                heights: portaData.heights.map((h) => h.trim()).filter(Boolean),
                widths: portaData.widths.map((w) => w.trim()).filter(Boolean),
            };
        }

        onConfirm(base);
    };

    /* ─────────────────────────────── RENDER ─────────────────────────────── */
    return (
        <View>
            {/* ── 1. Dropdown: tipo de produto ── */}
            <FormDropdown<ProductType>
                label="Tipo de produto"
                placeholder="Selecione o tipo..."
                options={PRODUCT_TYPES}
                value={productType}
                onChange={handleProductTypeChange}
            />

            {/* ── 2a. Janela: dropdown de variante ── */}
            {productType === 'janela' && (
                <FormDropdown<JanelaVariantKey>
                    label="Tipo de janela"
                    placeholder="Selecione a variante..."
                    options={JANELA_VARIANTS}
                    value={janelaVariant}
                    onChange={handleJanelaVariantChange}
                />
            )}

            {/* ── 2b. Janela: form da variante ── */}
            {productType === 'janela' && janelaVariant && (
                <>
                    <View style={styles.divider} />
                    <JanelaForm
                        variant={janelaVariant}
                        initialData={janelaData}
                        onChange={setJanelaData}
                    />
                </>
            )}

            {/* ── 2c. Porta: dropdown de variante ── */}
            {productType === 'porta' && (
                <FormDropdown<PortaVariantKey>
                    label="Tipo de porta"
                    placeholder="Selecione a variante..."
                    options={PORTA_VARIANTS}
                    value={portaVariant}
                    onChange={handlePortaVariantChange}
                />
            )}

            {/* ── 2d. Porta: form da variante ── */}
            {productType === 'porta' && portaVariant && (
                <>
                    <View style={styles.divider} />
                    <PortaForm
                        variant={portaVariant}
                        initialData={portaData}
                        onChange={setPortaData}
                    />
                </>
            )}

            {/* ── 2e. Genérico: nome + dimensões ── */}
            {productType === 'generic' && (
                <>
                    <View style={styles.divider} />

                    <View style={styles.fieldGroup}>
                        <Text style={styles.label}>Nome do produto</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder="Ex: Box, Portão..."
                            placeholderTextColor="#bbb"
                            returnKeyType="next"
                        />
                    </View>

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
                </>
            )}

            {/* ── 3. Campos comuns (só aparecem após tipo selecionado) ── */}
            {productType !== null && (
                <>
                    <View style={styles.divider} />

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

                    <View style={styles.fieldGroup}>
                        <View style={styles.toggleRow}>
                            <Text style={styles.toggleLabel}>Produto concluído</Text>
                            <Switch value={done} onValueChange={setDone} />
                        </View>
                    </View>

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
                </>
            )}

            {/* ── 4. Botão Salvar ── */}
            <TouchableOpacity
                style={[styles.confirmButton, !isValid && styles.confirmButtonDisabled]}
                onPress={handleConfirm}
                activeOpacity={isValid ? 0.8 : 1}
                disabled={!isValid}
            >
                <Text style={styles.confirmButtonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}
