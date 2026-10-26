import React from 'react';
import JanelaBaseForm, {
    JanelaBaseData,
    defaultJanelaBaseData,
} from '../_shared/JanelaBaseForm';

export const VARIANT_KEY = 'duasFolhas' as const;
export const VARIANT_LABEL = 'Janela 2 Folhas';

interface DuasFolhasFormProps {
    initialData?: JanelaBaseData;
    onChange: (data: JanelaBaseData) => void;
}

export default function DuasFolhasForm({ initialData, onChange }: DuasFolhasFormProps) {
    return (
        <JanelaBaseForm
            data={initialData ?? defaultJanelaBaseData()}
            onChange={onChange}
        />
    );
}
