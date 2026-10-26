/**
 * JanelaForm — hub de variantes de janela.
 *
 * Recebe a variante ativa (selecionada via dropdown no ProductDataForm) e
 * monta o form específico de cada subdiretório.
 * Os dados dos campos são emitidos via onChange para o ProductDataForm.
 */
import React from 'react';
import { JanelaVariantData, JanelaVariantKey } from '@/entities/projects/Project';
import { JanelaBaseData, defaultJanelaBaseData } from './_shared/JanelaBaseForm';
import DuasFolhasForm from './duasFolhas/DuasFolhasForm';
import TresFolhasForm from './tresFolhas/TresFolhasForm';
import QuatroFolhasForm from './quatroFolhas/QuatroFolhasForm';
import VitroForm from './vitro/VitroForm';

interface JanelaFormProps {
    variant: JanelaVariantKey;
    initialData: JanelaVariantData | null;
    onChange: (data: JanelaVariantData) => void;
}

/** Converte JanelaVariantData → JanelaBaseData para passar ao form da variante */
function toBaseData(d: JanelaVariantData | null): JanelaBaseData | undefined {
    if (!d) return undefined;
    return {
        heights: d.heights,
        widths: d.widths,
        corMaterial: d.corMaterial,
        tipoVidro: d.tipoVidro,
        corVidro: d.corVidro,
    };
}

export default function JanelaForm({ variant, initialData, onChange }: JanelaFormProps) {
    const handleChange = (base: JanelaBaseData) => {
        onChange({ variant, ...base });
    };

    const baseData = toBaseData(initialData?.variant === variant ? initialData : null);

    switch (variant) {
        case 'duasFolhas':
            return <DuasFolhasForm initialData={baseData} onChange={handleChange} />;
        case 'tresFolhas':
            return <TresFolhasForm initialData={baseData} onChange={handleChange} />;
        case 'quatroFolhas':
            return <QuatroFolhasForm initialData={baseData} onChange={handleChange} />;
        case 'vitro':
            return <VitroForm initialData={baseData} onChange={handleChange} />;
        default:
            return null;
    }
}
