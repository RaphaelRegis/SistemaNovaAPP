import BooleanFilter from "../impl/BooleanFilter";
import DateRangeFilter from "../impl/DateRangeFilter";
import MultiselectFilter from "../impl/MultiselectFilter";
import SortFilter from "../impl/SortFilter";
import { FilterConfig } from "@/entities/common/search_tools/SearchConfig";

interface FilterItemProps {
    filter: FilterConfig;
    value: unknown;
    onUpdate: (value: unknown) => void;
}

export default function FilterItem({ filter, value, onUpdate }: FilterItemProps) {
    switch (filter.type) {
        case 'multiselect':
            return <MultiselectFilter filter={filter} value={value as string[]} onUpdate={onUpdate} />;
        case 'boolean':
            return <BooleanFilter filter={filter} value={value as boolean | undefined} onUpdate={onUpdate} />;
        case 'daterange':
            return <DateRangeFilter filter={filter} value={value as { from?: string; to?: string } | undefined} onUpdate={onUpdate} />;
        case 'sort':
            return <SortFilter filter={filter} value={value as string | undefined} onUpdate={onUpdate} />;
        default:
            return null;
    }
}