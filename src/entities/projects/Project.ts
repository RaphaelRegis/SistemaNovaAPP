export interface FullProject {
    project_data: ProjectData;
    client_data?: ClientData;
    address_list: Address[];
    product_list: Product[];
    service_list: Service[];
}

export interface ProjectData {
    id: string;
    project_name: string;
    payment_methods: string[];
    observations: string;
    total_value: string;
    done: boolean;
    start_date: string;
    end_date: string;
}

export interface ClientData {
    id: string;
    name: string;
    whatsapp_contact: string;
}

export interface Address {
    id: string;
    city: string;
    address: string;
}

/* ─── Variantes de Janela ─── */
export type JanelaVariantKey = 'duasFolhas' | 'tresFolhas' | 'quatroFolhas' | 'vitro';

export const JANELA_VARIANTS: { key: JanelaVariantKey; label: string }[] = [
    { key: 'duasFolhas', label: '2 Folhas' },
    { key: 'tresFolhas', label: '3 Folhas' },
    { key: 'quatroFolhas', label: '4 Folhas' },
    { key: 'vitro', label: 'Vitrô' },
];

export const JANELA_COR_MATERIAL = ['Branco', 'Preto', 'Padrão de Madeira'] as const;
export const JANELA_TIPO_VIDRO = ['Normal', 'Jateado'] as const;
export const JANELA_COR_VIDRO = ['Transparente', 'Preto', 'Verde'] as const;

export type JanelaCorMaterial = typeof JANELA_COR_MATERIAL[number];
export type JanelaTipoVidro = typeof JANELA_TIPO_VIDRO[number];
export type JanelaCorVidro = typeof JANELA_COR_VIDRO[number];

export interface JanelaVariantData {
    variant: JanelaVariantKey;
    heights: string[];
    widths: string[];
    corMaterial: JanelaCorMaterial | '';
    tipoVidro: JanelaTipoVidro | '';
    corVidro: JanelaCorVidro | '';
}

/* ─── Variantes de Porta ─── */
export type PortaVariantKey = 'deslizante' | 'dobradica' | 'pivotante' | 'social' | 'vidro';

export const PORTA_VARIANTS: { key: PortaVariantKey; label: string }[] = [
    { key: 'deslizante', label: 'Porta Deslizante' },
    { key: 'dobradica', label: 'Porta Dobradiça' },
    { key: 'pivotante', label: 'Porta Pivotante' },
    { key: 'social', label: 'Porta Social' },
    { key: 'vidro', label: 'Porta de Vidro' },
];

export const PORTA_COR_MATERIAL = ['Branco', 'Preto', 'Padrão de Madeira'] as const;
export const PORTA_TIPO_VIDRO = ['Normal', 'Jateado'] as const;
export const PORTA_COR_VIDRO = ['Transparente', 'Preto', 'Verde'] as const;

export type PortaCorMaterial = typeof PORTA_COR_MATERIAL[number];
export type PortaTipoVidro = typeof PORTA_TIPO_VIDRO[number];
export type PortaCorVidro = typeof PORTA_COR_VIDRO[number];

export interface PortaVariantData {
    variant: PortaVariantKey;
    heights: string[];
    widths: string[];
    corMaterial: PortaCorMaterial | '';
    tipoVidro: PortaTipoVidro | '';
    corVidro: PortaCorVidro | '';
}

/* ─── Produto base ─── */
export type ProductType = 'janela' | 'porta' | 'generic';

export const PRODUCT_TYPES: { key: ProductType; label: string }[] = [
    { key: 'janela', label: 'Janela' },
    { key: 'porta', label: 'Porta' },
    { key: 'generic', label: 'Genérico' },
];

export interface Product {
    id: string;
    product_type: ProductType;
    /** Presente apenas quando product_type === 'janela' */
    janela_data?: JanelaVariantData;
    /** Presente apenas quando product_type === 'porta' */
    porta_data?: PortaVariantData;
    /** Campos legados / genéricos */
    name: string;
    heights: string[];
    widths: string[];
    price: string;
    observations: string;
    done: boolean;
}

export interface Service {
    id: string;
    description: string;
    price: string;
    observations: string;
    done: boolean;
}