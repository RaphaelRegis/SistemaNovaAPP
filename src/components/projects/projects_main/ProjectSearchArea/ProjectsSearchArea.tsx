import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import DefaultSearchBar from '../../../common/search_tools/DefaultSearchBar/DefaultSearchBar';
import DefaultSearchFilters from '../../../common/search_tools/DefaultSearchFilters/DefaultSearchFilters';
import { FilterValues, SearchPayload } from '@/entities/common/search_tools/SearchConfig';
import { DefaultProjectsSearchAreaContainer } from '@/styles/projects/projects_main/ProjectMain.style';
import { projectsSearchAreaService } from '@/services/projects/projects.service';

interface ProjectsSearchAreaProps {
    onSearch: (payload: SearchPayload) => void;
}

export default function ProjectsSearchArea({ onSearch }: ProjectsSearchAreaProps) {
    const searchBarConfig = projectsSearchAreaService.getProjectSearchBarConfig()
    const searchFiltersConfig = projectsSearchAreaService.getProjectFiltersConfig()

    const [filterValues, setFilterValues] = useState<FilterValues>({});

    const handleFiltersChange = useCallback((values: FilterValues) => {
        setFilterValues(values);
    }, []);

    return (
        <View style={DefaultProjectsSearchAreaContainer}>
            <DefaultSearchBar
                config={searchBarConfig}
                currentFilters={filterValues}
                onSearch={onSearch}
            />
            <DefaultSearchFilters
                config={searchFiltersConfig}
                values={filterValues}
                onChange={handleFiltersChange}
            />
        </View>
    );
}