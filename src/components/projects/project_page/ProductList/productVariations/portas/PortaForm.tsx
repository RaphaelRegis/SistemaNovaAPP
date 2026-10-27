/**
 * PortaForm — hub de variantes de porta.
 * Recebe a variante ativa e monta o form específico de cada subdiretório.
 */
import React from 'react';
import { PortaVariantData, PortaVariantKey } from '@/entities/projects/Project';
import { PortaBaseData, defaultPortaBaseData } from './_shared/PortaBaseForm';
import SocialForm from './social/SocialForm';
import PivotanteForm from './pivotante/PivotanteForm';
import DeslizanteForm from './deslizante/DeslizanteForm';
import DobradicaForm from './dobradica/DobradicaForm';
import VidroForm from './vidro/VidroForm';

interface PortaFormProps {
    variant: PortaVariantKey;
    initialData: PortaVariantData | null;
    onChange: (data: PortaVariantData) => void;
}

function toBaseData(d: PortaVariantData | null, variant: PortaVariantKey): PortaBaseData | undefined {
    if (!d || d.variant !== variant) return undefined;
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

    const baseData = toBaseData(initialData, variant);

    switch (variant) {
        case 'social':
            return <SocialForm initialData={baseData} onChange={handleChange} />;
        case 'pivotante':
            return <PivotanteForm initialData={baseData} onChange={handleChange} />;
        case 'deslizante':
            return <DeslizanteForm initialData={baseData} onChange={handleChange} />;
        case 'dobradica':
            return <DobradicaForm initialData={baseData} onChange={handleChange} />;
        case 'vidro':
            return <VidroForm initialData={baseData} onChange={handleChange} />;
        default:
            return null;
    }
}
