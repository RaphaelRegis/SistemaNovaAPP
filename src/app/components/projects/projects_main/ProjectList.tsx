import React, { useMemo, useCallback } from 'react';
import { FlatList, View, Text } from 'react-native';
import ProjectInfo from './ProjectInfo';
import { ProjectData } from '@/app/entities/projects/Project';
import { SearchPayload } from '@/app/entities/common/search_tools/SearchConfig';
import { projectListStyles as styles } from '@/app/styles/projects/projects_main/ProjectMain.style';

interface ProjectListProps {
    projectList: ProjectData[];
    searchPayload: SearchPayload | null;
}

/** Aplica query + filtros à lista completa e retorna o subconjunto filtrado */
function applySearch(list: ProjectData[], payload: SearchPayload | null): ProjectData[] {
    if (!payload) return list;

    let result = list;
    const { query, filters } = payload;

    // Filtro por nome
    if (query.trim()) {
        const q = query.trim().toLowerCase();
        result = result.filter((p) => p.project_name.toLowerCase().includes(q));
    }

    // Filtro por métodos de pagamento
    const paymentMethods = filters['payment_methods'] as string[] | undefined;
    if (paymentMethods && paymentMethods.length > 0) {
        result = result.filter((p) =>
            paymentMethods.some((m) => p.payment_methods.includes(m))
        );
    }

    // Filtro por concluído
    const done = filters['done'] as boolean | undefined;
    if (done !== undefined) {
        result = result.filter((p) => p.done === done);
    }

    // Filtro por intervalo de data (start_date)
    const dateRange = filters['date_range'] as { from?: string; to?: string } | undefined;
    if (dateRange) {
        const parseDate = (s: string) => {
            // Formato dd/mm/aaaa
            const [d, m, y] = s.split('/');
            return y && m && d ? new Date(`${y}-${m}-${d}`) : null;
        };
        if (dateRange.from) {
            const from = parseDate(dateRange.from);
            if (from) result = result.filter((p) => {
                const sd = parseDate(p.start_date);
                return sd ? sd >= from : true;
            });
        }
        if (dateRange.to) {
            const to = parseDate(dateRange.to);
            if (to) result = result.filter((p) => {
                const sd = parseDate(p.start_date);
                return sd ? sd <= to : true;
            });
        }
    }

    // Ordenação por data
    const sortDate = filters['sort_date'] as string | undefined;
    if (sortDate) {
        result = [...result].sort((a, b) => {
            const [d1, m1, y1] = a.start_date.split('/');
            const [d2, m2, y2] = b.start_date.split('/');
            const da = new Date(`${y1}-${m1}-${d1}`).getTime() || 0;
            const db = new Date(`${y2}-${m2}-${d2}`).getTime() || 0;
            return sortDate === 'date_asc' ? da - db : db - da;
        });
    }

    // Ordenação por valor
    const sortValue = filters['sort_value'] as string | undefined;
    if (sortValue) {
        result = [...result].sort((a, b) => {
            const va = parseFloat(a.total_value) || 0;
            const vb = parseFloat(b.total_value) || 0;
            return sortValue === 'value_asc' ? va - vb : vb - va;
        });
    }

    return result;
}

export default function ProjectList({ projectList, searchPayload }: ProjectListProps) {
    // Recalcula a lista visível de forma declarativa (sem efeito colateral)
    const visibleProjects = useMemo(
        () => applySearch(projectList, searchPayload),
        [projectList, searchPayload]
    );

    const renderItem = useCallback(
        ({ item }: { item: ProjectData }) => <ProjectInfo project={item} />,
        []
    );

    const keyExtractor = useCallback((item: ProjectData) => item.id, []);

    return (
        <FlatList
            data={visibleProjects}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            contentContainerStyle={styles.content}
            ListEmptyComponent={
                <View style={styles.empty}>
                    <Text style={styles.emptyText}>Nenhum projeto encontrado.</Text>
                </View>
            }
        />
    );
}