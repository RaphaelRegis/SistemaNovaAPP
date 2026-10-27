import React from 'react';
import PortaBaseForm, { PortaBaseData, defaultPortaBaseData } from '../_shared/PortaBaseForm';

export const VARIANT_KEY = 'pivotante' as const;
export const VARIANT_LABEL = 'Porta Pivotante';

interface PivotanteFormProps {
    initialData?: PortaBaseData;
    onChange: (data: PortaBaseData) => void;
}

export default function PivotanteForm({ initialData, onChange }: PivotanteFormProps) {
    return <PortaBaseForm data={initialData ?? defaultPortaBaseData()} onChange={onChange} />;
}
