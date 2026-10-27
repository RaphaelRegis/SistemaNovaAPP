/**
 * PortaBaseForm — campos comuns a todas as variantes de porta:
 * altura, largura, cor do material, tipo do vidro, cor do vidro.
 *
 * Importado por cada variante (deslizante, pivotante, giro, etc).
 * Recebe e emite PortaBaseData para que o form pai (ProductDataForm) possa
 * compor com o campo `variant`.
 */
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {
    PORTA_COR_MATERIAL,
    PORTA_TIPO_VIDRO,
    PORTA_COR_VIDRO,
    PortaCorMaterial,
    PortaTipoVidro,
    PortaCorVidro,
} from '@/entities/projects/Project';

export interface PortaBaseData {
    heights: string[];
    widths: string[];
    corMaterial: PortaCorMaterial | '';
    tipoVidro: PortaTipoVidro | '';
    corVidro: PortaCorVidro | '';
}

export function defaultPortaBaseData(): PortaBaseData {
    return { heights: [''], widths: [''], corMaterial: '', tipoVidro: '', corVidro: '' };
}

/** Valida se os dados base de porta estão completos para habilitar o Salvar */
export function isPortaBaseValid(d: PortaBaseData): boolean {
    return true;
}

interface PortaBaseFormProps {
    data: PortaBaseData;
    onChange: (data: PortaBaseData) => void;
}

export default function PortaBaseForm({ data, onChange }: PortaBaseFormProps) {
    return (
        <View>
        </View>
    );
}
