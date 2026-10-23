import React, { useMemo, useCallback } from 'react';
import { FlatList, View, Text } from 'react-native';
import ProjectInfo from './ProjectInfo';
import { ProjectData } from '@/entities/projects/Project';
import { SearchPayload } from '@/entities/common/search_tools/SearchConfig';
import { projectListStyles as styles } from '@/styles/projects/projects_main/ProjectMain.style';
import { projectsListService } from '@/services/projects/projects.service';

interface ProjectListProps {
    projectList: ProjectData[];
    searchPayload: SearchPayload | null;
}

/** Aplica query + filtros à lista completa e retorna o subconjunto filtrado */

export default function ProjectList({ projectList, searchPayload }: ProjectListProps) {
    // Recalcula a lista visível de forma declarativa (sem efeito colateral)
    const visibleProjects = useMemo(
        () => projectsListService.applyProjectSearch(projectList, searchPayload),
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