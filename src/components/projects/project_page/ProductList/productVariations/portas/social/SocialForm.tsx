import React from 'react';
import PortaBaseForm, { PortaBaseData, defaultPortaBaseData } from '../_shared/PortaBaseForm';

export const VARIANT_KEY = 'social' as const;
export const VARIANT_LABEL = 'Porta Social';

interface SocialFormProps {
    initialData?: PortaBaseData;
    onChange: (data: PortaBaseData) => void;
}

export default function SocialForm({ initialData, onChange }: SocialFormProps) {
    return <PortaBaseForm data={initialData ?? defaultPortaBaseData()} onChange={onChange} />;
}
