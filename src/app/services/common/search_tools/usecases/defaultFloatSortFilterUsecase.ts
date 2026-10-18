export const defaultFloatSortFilterUsecase = {
    execute(list: any[], filter: string | undefined, propertyName: string) {
        let result = list;

        if (filter) {
            result = [...result].sort((a, b) => {
                const va = parseFloat(a[propertyName]) || 0;
                const vb = parseFloat(b[propertyName]) || 0;
                return filter === 'asc' ? va - vb : vb - va;
            })
        }

        return result;
    }
}