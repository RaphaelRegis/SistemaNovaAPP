export const defaultDateRangeFilterUsecase = {
    execute(list: any[], filter: { from?: string, to?: string } | undefined, propertyName: string) {
        let result = list;

        if (filter) {
            const parseDate = (s: string) => {
                const [d, m, y] = s.split('/');
                return y && m && d ? new Date(`${y}-${m}-${d}`) : null;
            }

            if (filter.from) {
                const from = parseDate(filter.from);
                if (from) result = result.filter((p) => {
                    const sd = parseDate(p[propertyName]);
                    return sd ? sd >= from : true;
                })
            }

            if (filter.to) {
                const to = parseDate(filter.to);
                if (to) result = result.filter((p) => {
                    const sd = parseDate(p[propertyName]);
                    return sd ? sd >= to : true;
                })
            }
        }

        return result;
    }
}