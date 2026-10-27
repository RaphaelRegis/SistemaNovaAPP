import React from 'react';
import PortaBaseForm, { PortaBaseData, defaultPortaBaseData } from '../_shared/PortaBaseForm';

export const VARIANT_KEY = 'dobradica' as const;
export const VARIANT_LABEL = 'Porta Dobradiça';

interface DobradicaFormProps {
    initialData?: PortaBaseData;
    onChange: (data: PortaBaseData) => void;
}

export default function DobradicaForm({ initialData, onChange }: DobradicaFormProps) {
    return <PortaBaseForm data={initialData ?? defaultPortaBaseData()} onChange={onChange} />;
}
