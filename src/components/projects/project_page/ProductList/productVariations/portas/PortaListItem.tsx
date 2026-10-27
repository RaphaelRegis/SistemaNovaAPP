/**
 * PortaListItem — hub de exibição de variantes de porta na lista.
 * Despacha para o ListItem específico de cada variante.
 */
import React from 'react';
import { PortaVariantData } from '@/entities/projects/Project';
import SocialListItem from './social/SocialListItem';
import PivotanteListItem from './pivotante/PivotanteListItem';
import DeslizanteListItem from './deslizante/DeslizanteListItem';
import DobradicaListItem from './dobradica/DobradicaListItem';
import VidroListItem from './vidro/VidroListItem';

interface PortaListItemProps {
    data: PortaVariantData;
}

export default function PortaListItem({ data }: PortaListItemProps) {
    switch (data.variant) {
        case 'social':
            return <SocialListItem data={data} />;
        case 'pivotante':
            return <PivotanteListItem data={data} />;
        case 'deslizante':
            return <DeslizanteListItem data={data} />;
        case 'dobradica':
            return <DobradicaListItem data={data} />;
        case 'vidro':
            return <VidroListItem data={data} />;
        default:
            return null;
    }
}
