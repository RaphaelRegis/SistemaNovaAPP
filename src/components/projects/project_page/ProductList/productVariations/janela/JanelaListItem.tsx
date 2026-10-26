/**
 * JanelaListItem — hub de exibição de variantes de janela na lista.
 * Despacha para o ListItem específico de cada variante.
 */
import React from 'react';
import { JanelaVariantData } from '@/entities/projects/Project';
import DuasFolhasListItem from './duasFolhas/DuasFolhasListItem';
import TresFolhasListItem from './tresFolhas/TresFolhasListItem';
import QuatroFolhasListItem from './quatroFolhas/QuatroFolhasListItem';
import VitroListItem from './vitro/VitroListItem';

interface JanelaListItemProps {
    data: JanelaVariantData;
}

export default function JanelaListItem({ data }: JanelaListItemProps) {
    switch (data.variant) {
        case 'duasFolhas':
            return <DuasFolhasListItem data={data} />;
        case 'tresFolhas':
            return <TresFolhasListItem data={data} />;
        case 'quatroFolhas':
            return <QuatroFolhasListItem data={data} />;
        case 'vitro':
            return <VitroListItem data={data} />;
        default:
            return null;
    }
}
