export const defaultMultiselectFilterUsecase = {
    execute(list: any[], filter: string[] | undefined, propertyName: string) {
        let result = list;

        if (filter && filter.length > 0) {
            result = result.filter((p) => {
                filter.some((m) => p[propertyName].includes(m));
            })
        }

        return result;
    }
}