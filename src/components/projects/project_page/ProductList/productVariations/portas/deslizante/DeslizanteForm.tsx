import React from 'react';
import { View } from 'react-native';
import { PortaBaseData } from '../_shared/PortaBaseForm';

export const VARIANT_KEY = 'deslizante' as const;
export const VARIANT_LABEL = 'Porta Deslizante';

interface DeslizanteFormProps {
    initialData?: PortaBaseData;
    onChange: (data: PortaBaseData) => void;
}

export default function DeslizanteForm({ initialData, onChange }: DeslizanteFormProps) {
    return (
        <View></View>
    );
}
