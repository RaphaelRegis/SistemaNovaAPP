import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import DefaultSearchBar from '../../common/search_tools/DefaultSearchBar';
import DefaultSearchFilters from '../../common/search_tools/DefaultSearchFilters';
import {
    projectsSearchBarConfig,
    projectsSearchFiltersConfig,
} from '@/app/services/projects/projectsSearchConfig';
import { FilterValues, SearchPayload } from '@/app/entities/common/search_tools/SearchConfig';
import { DefaultProjectsSearchAreaContainer } from '@/app/styles/projects/projects_main/ProjectMain.style';

interface ProjectsSearchAreaProps {
    onSearch: (payload: SearchPayload) => void;
}

export default function ProjectsSearchArea({ onSearch }: ProjectsSearchAreaProps) {
    const [filterValues, setFilterValues] = useState<FilterValues>({});

    const handleFiltersChange = useCallback((values: FilterValues) => {
        setFilterValues(values);
    }, []);

    return (
        <View style={DefaultProjectsSearchAreaContainer}>
            <DefaultSearchBar
                config={projectsSearchBarConfig}
                currentFilters={filterValues}
                onSearch={onSearch}
            />
            <DefaultSearchFilters
                config={projectsSearchFiltersConfig}
                values={filterValues}
                onChange={handleFiltersChange}
            />
        </View>
    );
}