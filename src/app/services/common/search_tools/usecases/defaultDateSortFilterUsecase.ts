export const defaultDateSortFilterUsecase = {
    execute(list: any[], filter: string | undefined, propertyName: string) {
        let result = list;

        if (filter) {
            result = [...result].sort((a, b) => {
                const [d1, m1, y1] = a[propertyName].split('/');
                const [d2, m2, y2] = b[propertyName].split('/');
                const da = new Date(`${y1}-${m1}-${d1}`).getTime() || 0;
                const db = new Date(`${y2}-${m2}-${d2}`).getTime() || 0;
                return filter === 'asc' ? da - db : db - da;
            });
        }

        return result;
    }
}