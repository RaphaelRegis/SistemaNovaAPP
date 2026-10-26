import React from 'react';
import JanelaBaseForm, {
    JanelaBaseData,
    defaultJanelaBaseData,
} from '../_shared/JanelaBaseForm';

export const VARIANT_KEY = 'vitro' as const;
export const VARIANT_LABEL = 'Janela Vitrô';

interface VitroFormProps {
    initialData?: JanelaBaseData;
    onChange: (data: JanelaBaseData) => void;
}

export default function VitroForm({ initialData, onChange }: VitroFormProps) {
    return (
        <JanelaBaseForm
            data={initialData ?? defaultJanelaBaseData()}
            onChange={onChange}
        />
    );
}
