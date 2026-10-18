export const defaultSearchBarFilterUsecase = {
    execute(query: string, list: any[], propertyName: string) {
        let result = list;

        if (query.trim()) {
            const q = query.trim().toLowerCase();
            result = result.filter((item) => item[propertyName].toLowerCase().includes(q))
        }

        return result;
    }
}