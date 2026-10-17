import React, { useState, useCallback, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import ProjectsActions from './ProjectsActions';
import ProjectList from './ProjectList';
import ProjectsSearchArea from './ProjectsSearchArea';
import { ProjectData } from '@/app/entities/projects/Project';
import { mainService } from '@/app/services/projects/projects.service';
import { SearchPayload } from '@/app/entities/common/search_tools/SearchConfig';
import { projectMainStyles as styles, DefaultProjectMainContainer } from '@/app/styles/projects/projects_main/ProjectMain.style';

export default function ProjectsMain() {
    const [projectList, setProjectList] = useState<ProjectData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchPayload, setSearchPayload] = useState<SearchPayload | null>(null);

    useEffect(() => {
        mainService
            .getAllProjects()
            .then(setProjectList)
            .catch(() => setError('Não foi possível carregar os projetos.'))
            .finally(() => setLoading(false));
    }, []);

    const handleSearch = useCallback((payload: SearchPayload) => {
        setSearchPayload(payload);
    }, []);

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={DefaultProjectMainContainer}>
            <ProjectsSearchArea onSearch={handleSearch} />
            <ProjectList projectList={projectList} searchPayload={searchPayload} />
            <ProjectsActions />
        </View>
    );
}