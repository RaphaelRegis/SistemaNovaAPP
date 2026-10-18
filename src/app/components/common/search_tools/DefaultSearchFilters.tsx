import React, { useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {
    SearchFiltersConfig,
    FilterConfig,
    FilterValues,
} from '@/app/entities/common/search_tools/SearchConfig';
import { searchFiltersStyles as styles } from '@/app/styles/common/search_tools/SearchTools.style';

interface DefaultSearchFiltersProps {
    config: SearchFiltersConfig;
    values: FilterValues;
    onChange: (values: FilterValues) => void;
}

export default function DefaultSearchFilters({ config, values, onChange }: DefaultSearchFiltersProps) {
    const updateFilter = useCallback(
        (key: string, value: unknown) => {
            onChange({ ...values, [key]: value });
        },
        [values, onChange]
    );

    return (
        <View style={styles.container}>
            {config.filters.map((filter) => (
                <FilterItem
                    key={filter.key}
                    filter={filter}
                    value={values[filter.key]}
                    onUpdate={(val) => updateFilter(filter.key, val)}
                />
            ))}
        </View>
    );
}

/* ─── Renderizador individual de filtro ─── */

interface FilterItemProps {
    filter: FilterConfig;
    value: unknown;
    onUpdate: (value: unknown) => void;
}

function FilterItem({ filter, value, onUpdate }: FilterItemProps) {
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

/* ─── Multiselect ─── */
function MultiselectFilter({
    filter,
    value,
    onUpdate,
}: {
    filter: FilterConfig;
    value: string[] | undefined;
    onUpdate: (v: unknown) => void;
}) {
    const selected = value ?? [];

    const toggle = (optValue: string) => {
        const next = selected.includes(optValue)
            ? selected.filter((s) => s !== optValue)
            : [...selected, optValue];
        onUpdate(next);
    };

    return (
        <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>{filter.label}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
                {filter.options?.map((opt) => {
                    const active = selected.includes(opt.value);
                    return (
                        <TouchableOpacity
                            key={opt.value}
                            style={[styles.chip, active && styles.chipActive]}
                            onPress={() => toggle(opt.value)}
                        >
                            <Text style={[styles.chipText, active && styles.chipTextActive]}>{opt.label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}

/* ─── Boolean ─── */
function BooleanFilter({
    filter,
    value,
    onUpdate,
}: {
    filter: FilterConfig;
    value: boolean | undefined;
    onUpdate: (v: unknown) => void;
}) {
    const cycle = () => {
        // undefined → true → false → undefined
        if (value === undefined) onUpdate(true);
        else if (value === true) onUpdate(false);
        else onUpdate(undefined);
    };

    const label =
        value === undefined ? filter.label : value ? `${filter.label}: Sim` : `${filter.label}: Não`;
    const active = value !== undefined;

    return (
        <View style={styles.filterGroup}>
            <TouchableOpacity style={[styles.chip, active && styles.chipActive]} onPress={cycle}>
                <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
}

function formatDateInput(text: string): string {
    const cleaned = text.replace(/\D/g, '').slice(0, 8);
    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 4) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
}

function DateRangeFilter({
    filter,
    value,
    onUpdate,
}: {
    filter: FilterConfig;
    value: { from?: string; to?: string } | undefined;
    onUpdate: (v: unknown) => void;
}) {
    const from = value?.from ?? '';
    const to = value?.to ?? '';

    const handleFromChange = (t: string) => {
        const formatted = formatDateInput(t);
        onUpdate({ ...value, from: formatted });
    };

    const handleToChange = (t: string) => {
        const formatted = formatDateInput(t);
        onUpdate({ ...value, to: formatted });
    };

    return (
        <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>{filter.label}</Text>
            <View style={styles.dateRow}>
                <TextInput
                    style={styles.dateInput}
                    placeholder="De (dd/mm/aaaa)"
                    value={from}
                    onChangeText={handleFromChange}
                    keyboardType="numeric"
                    maxLength={10}
                />
                <TextInput
                    style={styles.dateInput}
                    placeholder="Até (dd/mm/aaaa)"
                    value={to}
                    onChangeText={handleToChange}
                    keyboardType="numeric"
                    maxLength={10}
                />
            </View>
        </View>
    );
}

/* ─── Sort ─── */
function SortFilter({
    filter,
    value,
    onUpdate,
}: {
    filter: FilterConfig;
    value: string | undefined;
    onUpdate: (v: unknown) => void;
}) {
    return (
        <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>{filter.label}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
                {filter.sortOptions?.map((opt) => {
                    const active = value === opt.value;
                    return (
                        <TouchableOpacity
                            key={opt.value}
                            style={[styles.chip, active && styles.chipActive]}
                            onPress={() => onUpdate(active ? undefined : opt.value)}
                        >
                            <Text style={[styles.chipText, active && styles.chipTextActive]}>{opt.label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}