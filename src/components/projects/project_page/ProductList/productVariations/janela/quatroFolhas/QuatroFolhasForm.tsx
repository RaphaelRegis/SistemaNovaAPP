import React from 'react';
import JanelaBaseForm, {
    JanelaBaseData,
    defaultJanelaBaseData,
} from '../_shared/JanelaBaseForm';

export const VARIANT_KEY = 'quatroFolhas' as const;
export const VARIANT_LABEL = 'Janela 4 Folhas';

interface QuatroFolhasFormProps {
    initialData?: JanelaBaseData;
    onChange: (data: JanelaBaseData) => void;
}

export default function QuatroFolhasForm({ initialData, onChange }: QuatroFolhasFormProps) {
    return (
        <JanelaBaseForm
            data={initialData ?? defaultJanelaBaseData()}
            onChange={onChange}
        />
    );
}
