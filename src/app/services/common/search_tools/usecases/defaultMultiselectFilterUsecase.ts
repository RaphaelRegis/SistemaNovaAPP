export const defaultMultiselectFilterUsecase = {
    execute(list: any[], filters: string[] | undefined, propertyName: string) {
        let result = list;

        if (filters && filters.length > 0) {
            result = result.filter((p) => {
                return filters.some((m) => p[propertyName].includes(m));
            })
        }

        return result;
    }
}