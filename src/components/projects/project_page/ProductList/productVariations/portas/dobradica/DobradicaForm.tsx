import React from 'react';
import { View } from 'react-native';
import { PortaBaseData } from '../_shared/PortaBaseForm';

export const VARIANT_KEY = 'dobradica' as const;
export const VARIANT_LABEL = 'Porta de Dobradiça';

interface DobradicaFormProps {
    initialData?: PortaBaseData;
    onChange: (data: PortaBaseData) => void;
}

export default function DobradicaForm({ initialData, onChange }: DobradicaFormProps) {
    return (
        <View></View>
    );
}
