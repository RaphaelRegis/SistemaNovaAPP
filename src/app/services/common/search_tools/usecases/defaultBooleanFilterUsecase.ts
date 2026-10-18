export const defaultBooleanFilterUsecase = {
    execute(list: any[], filter: boolean | undefined, propertyName: string) {
        let result = list;

        if (filter !== undefined) {
            result = result.filter((p) => p[propertyName] === filter);
        }

        return result;
    }
}