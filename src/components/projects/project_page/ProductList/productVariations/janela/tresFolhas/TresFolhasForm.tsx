import React from 'react';
import JanelaBaseForm, {
    JanelaBaseData,
    defaultJanelaBaseData,
} from '../_shared/JanelaBaseForm';

export const VARIANT_KEY = 'tresFolhas' as const;
export const VARIANT_LABEL = 'Janela 3 Folhas';

interface TresFolhasFormProps {
    initialData?: JanelaBaseData;
    onChange: (data: JanelaBaseData) => void;
}

export default function TresFolhasForm({ initialData, onChange }: TresFolhasFormProps) {
    return (
        <JanelaBaseForm
            data={initialData ?? defaultJanelaBaseData()}
            onChange={onChange}
        />
    );
}
