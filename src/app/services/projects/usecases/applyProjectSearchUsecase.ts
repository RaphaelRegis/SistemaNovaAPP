import { ProjectData } from "@/app/entities/projects/Project";
import { SearchPayload } from "@/app/entities/common/search_tools/SearchConfig";
import { searchToolsService } from "@/app/services/common/search_tools/SearchTools.service";

export const applyProjectSearchUsecase = {
    execute(list: ProjectData[], payload: SearchPayload | null): ProjectData[] {
        if (!payload) return list;

        let result = list;
        const { query, filters } = payload;

        // Filtro por nome
        result = searchToolsService.defaultSearchBarFilter(query, result, 'project_name');

        // Filtro por métodos de pagamento
        const paymentMethods = filters['payment_methods'] as string[] | undefined;
        result = searchToolsService.defaultMultiselectFilter(result, paymentMethods, 'payment_methods');

        // Filtro por concluído
        const done = filters['done'] as boolean | undefined;
        result = searchToolsService.defaultBooleanFilter(result, done, 'done');

        // Filtro por intervalo de data (start_date)
        const dateRange = filters['date_range'] as { from?: string; to?: string } | undefined;
        result = searchToolsService.defaultDateRangeFilter(result, dateRange, 'start_date');

        // Ordenação por data
        const sortDate = filters['sort_date'] as string | undefined;
        result = searchToolsService.defaultDateSortFilter(result, sortDate, 'start_date');

        // Ordenação por valor
        const sortValue = filters['sort_value'] as string | undefined;
        result = searchToolsService.defaultFloatSortFilter(result, sortValue, 'total_value');

        return result;

    }
}