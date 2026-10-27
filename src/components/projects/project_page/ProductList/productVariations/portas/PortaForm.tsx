/**
 * PortaForm — hub de variantes de porta.
 *
 * Recebe a variante ativa (selecionada via dropdown no ProductDataForm) e
 * monta o form específico de cada subdiretório.
 * Os dados dos campos são emitidos via onChange para o ProductDataForm.
 */
import { PortaVariantData, PortaVariantKey } from '@/entities/projects/Project';
import React from 'react';
import { PortaBaseData } from './_shared/PortaBaseForm';
import DeslizanteForm from './deslizante/DeslizanteForm';
import PivotanteForm from './pivotante/PivotanteForm';
import SocialForm from './social/SocialForm';
import VidroForm from './vidro/VidroForm';
import DobradicaForm from './dobradica/DobradicaForm';

interface PortaFormProps {
    variant: PortaVariantKey;
    initialData: PortaVariantData | null;
    onChange: (data: PortaVariantData) => void;
}

/** Converte PortaVariantData → PortaBaseData para passar ao form da variante */
function toBaseData(d: PortaVariantData | null): PortaBaseData | undefined {
    if (!d) return undefined;
    return {
        heights: d.heights,
        widths: d.widths,
        corMaterial: d.corMaterial,
        tipoVidro: d.tipoVidro,
        corVidro: d.corVidro,
    };
}

export default function PortaForm({ variant, initialData, onChange }: PortaFormProps) {
    const handleChange = (base: PortaBaseData) => {
        onChange({ variant, ...base });
    };

    const baseData = toBaseData(initialData?.variant === variant ? initialData : null);

    switch (variant) {
        case 'deslizante':
            return <DeslizanteForm initialData={baseData} onChange={handleChange} />;
        case 'dobradica':
            return <DobradicaForm initialData={baseData} onChange={handleChange} />;
        case 'pivotante':
            return <PivotanteForm initialData={baseData} onChange={handleChange} />;
        case 'social':
            return <SocialForm initialData={baseData} onChange={handleChange} />;
        case 'vidro':
            return <VidroForm initialData={baseData} onChange={handleChange} />;
        default:
            return null;
    }
}
