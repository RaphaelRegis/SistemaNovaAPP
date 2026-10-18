import { defaultSearchBarFilterUsecase } from "./usecases/defaultSearchBarFilterUsecase";
import { defaultMultiselectFilterUsecase } from "./usecases/defaultMultiselectFilterUsecase";
import { defaultBooleanFilterUsecase } from "./usecases/defaultBooleanFilterUsecase";
import { defaultDateRangeFilterUsecase } from "./usecases/defaultDateRangeFilterUsecase";
import { defaultDateSortFilterUsecase } from "./usecases/defaultDateSortFilterUsecase";
import { defaultFloatSortFilterUsecase } from "./usecases/defaultFloatSortFilterUsecase";

export const searchToolsService = {

    // working
    defaultSearchBarFilter(query: string, list: any[], propertyName: string) {
        return defaultSearchBarFilterUsecase.execute(query, list, propertyName);
    },

    // not working
    defaultMultiselectFilter(list: any[], filter: string[] | undefined, propertyName: string) {
        return defaultMultiselectFilterUsecase.execute(list, filter, propertyName);
    },

    // working
    defaultBooleanFilter(list: any[], filter: boolean | undefined, propertyName: string) {
        return defaultBooleanFilterUsecase.execute(list, filter, propertyName);
    },

    // not working
    defaultDateRangeFilter(list: any[], filter: { from?: string, to?: string } | undefined, propertyName: string) {
        return defaultDateRangeFilterUsecase.execute(list, filter, propertyName);
    },

    defaultDateSortFilter(list: any[], filter: string | undefined, propertyName: string) {
        return defaultDateSortFilterUsecase.execute(list, filter, propertyName);
    },

    defaultFloatSortFilter(list: any[], filter: string | undefined, propertyName: string) {
        return defaultFloatSortFilterUsecase.execute(list, filter, propertyName);
    }

}