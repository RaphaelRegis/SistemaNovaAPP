import React from 'react';
import PortaBaseForm, { PortaBaseData, defaultPortaBaseData } from '../_shared/PortaBaseForm';

export const VARIANT_KEY = 'vidro' as const;
export const VARIANT_LABEL = 'Porta de Vidro';

interface VidroFormProps {
    initialData?: PortaBaseData;
    onChange: (data: PortaBaseData) => void;
}

export default function VidroForm({ initialData, onChange }: VidroFormProps) {
    return <PortaBaseForm data={initialData ?? defaultPortaBaseData()} onChange={onChange} />;
}
