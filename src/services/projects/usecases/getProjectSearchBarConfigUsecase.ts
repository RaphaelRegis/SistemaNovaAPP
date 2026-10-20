import { SearchBarConfig } from "@/entities/common/search_tools/SearchConfig";

export const getProjectSearchBarConfigUsecase = {
    execute(): SearchBarConfig {
        return {
            placeholder: 'Buscar projeto pelo nome...',
        };
    }
}