function parseDateToNumber(dateStr?: string): number | null {
    if (!dateStr || typeof dateStr !== 'string') return null;
    const clean = dateStr.trim();
    if (!clean) return null;

    if (clean.includes('/')) {
        const parts = clean.split('/');
        if (parts.length === 3) {
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10);
            const year = parseInt(parts[2], 10);
            if (
                !isNaN(day) &&
                !isNaN(month) &&
                !isNaN(year) &&
                year >= 1000 &&
                month >= 1 &&
                month <= 12 &&
                day >= 1 &&
                day <= 31
            ) {
                return year * 10000 + month * 100 + day;
            }
        }
    }

    const digitsOnly = clean.replace(/\D/g, '');
    if (digitsOnly.length === 8) {
        const day = parseInt(digitsOnly.slice(0, 2), 10);
        const month = parseInt(digitsOnly.slice(2, 4), 10);
        const year = parseInt(digitsOnly.slice(4), 10);
        if (
            !isNaN(day) &&
            !isNaN(month) &&
            !isNaN(year) &&
            year >= 1000 &&
            month >= 1 &&
            month <= 12 &&
            day >= 1 &&
            day <= 31
        ) {
            return year * 10000 + month * 100 + day;
        }
    }

    return null;
}

export const defaultDateRangeFilterUsecase = {
    execute(list: any[], filter: { from?: string; to?: string } | undefined, propertyName: string) {
        let result = list;

        if (filter) {
            const from = parseDateToNumber(filter.from);
            const to = parseDateToNumber(filter.to);

            if (from !== null) {
                result = result.filter((item) => {
                    const itemDate = parseDateToNumber(item[propertyName]);
                    return itemDate !== null ? itemDate >= from : false;
                });
            }

            if (to !== null) {
                result = result.filter((item) => {
                    const itemDate = parseDateToNumber(item[propertyName]);
                    return itemDate !== null ? itemDate <= to : false;
                });
            }
        }

        return result;
    },
};