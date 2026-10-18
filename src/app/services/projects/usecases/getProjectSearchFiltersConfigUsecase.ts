import { SearchFiltersConfig } from "@/app/entities/common/search_tools/SearchConfig";

export const getProjectSearchFiltersConfigUsecase = {
    execute(): SearchFiltersConfig {
        return {
            filters: [
                {
                    key: 'payment_methods',
                    label: 'Método de pagamento',
                    type: 'multiselect',
                    options: [
                        { label: 'Pix', value: 'pix' },
                        { label: 'Cartão', value: 'cartão' },
                        { label: 'Dinheiro', value: 'dinheiro' },
                        { label: 'Boleto', value: 'boleto' },
                    ],
                },
                {
                    key: 'done',
                    label: 'Concluído',
                    type: 'boolean',
                },
                {
                    key: 'date_range',
                    label: 'Intervalo de data (início)',
                    type: 'daterange',
                },
                {
                    key: 'sort_date',
                    label: 'Ordenar por data',
                    type: 'sort',
                    sortOptions: [
                        { label: 'Mais recente', value: 'desc' },
                        { label: 'Mais antigo', value: 'asc' },
                    ],
                },
                {
                    key: 'sort_value',
                    label: 'Ordenar por valor',
                    type: 'sort',
                    sortOptions: [
                        { label: 'Maior valor', value: 'desc' },
                        { label: 'Menor valor', value: 'asc' },
                    ],
                },
            ],
        };
    }
}