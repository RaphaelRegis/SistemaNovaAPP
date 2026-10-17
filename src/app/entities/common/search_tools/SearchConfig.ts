// Configuração genérica para a barra de pesquisa
export interface SearchBarConfig {
    placeholder: string;
}

// Tipos de filtro suportados
export type FilterType =
    | 'multiselect'
    | 'boolean'
    | 'daterange'
    | 'sort';

export interface FilterOption {
    label: string;
    value: string;
}

export interface FilterConfig {
    key: string;
    label: string;
    type: FilterType;
    /** Para type === 'multiselect' */
    options?: FilterOption[];
    /** Para type === 'sort' */
    sortOptions?: FilterOption[];
}

export interface SearchFiltersConfig {
    filters: FilterConfig[];
}

/** Valores produzidos pelos filtros — chave é o `key` do FilterConfig */
export type FilterValues = Record<string, unknown>;

/** Payload emitido pelo SearchArea ao pesquisar */
export interface SearchPayload {
    query: string;
    filters: FilterValues;
}
