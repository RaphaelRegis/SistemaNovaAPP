import React from 'react';
import { View } from 'react-native';
import { PortaBaseData } from '../_shared/PortaBaseForm';

export const VARIANT_KEY = 'pivotante' as const;
export const VARIANT_LABEL = 'Porta Pivotante';

interface PivotanteFormProps {
    initialData?: PortaBaseData;
    onChange: (data: PortaBaseData) => void;
}

export default function PivotanteForm({ initialData, onChange }: PivotanteFormProps) {
    return (
        <View></View>
    );
}
