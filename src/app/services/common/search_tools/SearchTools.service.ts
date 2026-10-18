export const searchToolsService = {

    // working
    defaultSearchBarFilter(query: string, list: any[], propertyName: string) {
        let result = list;

        if (query.trim()) {
            const q = query.trim().toLowerCase();
            result = result.filter((item) => item[propertyName].toLowerCase().includes(q))
        }

        return result;
    },

    // not working
    defaultMultiselectFilter(list: any[], filter: string[] | undefined, propertyName: string) {
        let result = list;

        if (filter && filter.length > 0) {
            result = result.filter((p) => {
                filter.some((m) => p[propertyName].includes(m));
            })
        }

        return result;
    },

    // working
    defaultBooleanFilter(list: any[], filter: boolean | undefined, propertyName: string) {
        let result = list;

        if (filter !== undefined) {
            result = result.filter((p) => p[propertyName] === filter);
        }

        return result;
    },

    // not working
    defaultDateRangeFilter(list: any[], filter: { from?: string, to?: string } | undefined, propertyName: string) {
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
    },

    defaultDateSortFilter(list: any[], filter: string | undefined, propertyName: string) {
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
    },

    defaultFloatSortFilter(list: any[], filter: string | undefined, propertyName: string) {

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