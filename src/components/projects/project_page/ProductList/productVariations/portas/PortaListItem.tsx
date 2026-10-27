/**
 * PortaListItem — hub de exibição de variantes de porta na lista.
 * Despacha para o ListItem específico de cada variante.
 */
import React from 'react';
import { PortaVariantData } from '@/entities/projects/Project';
import DeslizanteListItem from './deslizante/DeslizanteListItem';
import DobradicaListItem from './dobradica/DobradicaListItem';
import PivotanteListItem from './pivotante/PivotanteListItem';
import SocialListItem from './social/SocialListItem';
import VidroListItem from './vidro/VidroListItem';

interface PortaListItemProps {
    data: PortaVariantData;
}

export default function PortaListItem({ data }: PortaListItemProps) {
    switch (data.variant) {
        case 'deslizante':
            return <DeslizanteListItem data={data} />;
        case 'dobradica':
            return <DobradicaListItem data={data} />;
        case 'pivotante':
            return <PivotanteListItem data={data} />;
        case 'social':
            return <SocialListItem data={data} />;
        case 'vidro':
            return <VidroListItem data={data} />;
        default:
            return null;
    }
}
