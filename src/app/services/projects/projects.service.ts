import { FullProject, ProjectData } from "@/app/entities/projects/Project";
import { getAllProjectsUsecase } from "./usecases/getAllProjectsUsecase";
import { getFullProjectUsecase } from "./usecases/getFullProjectUsecase";
import { getProjectSearchBarConfigUsecase } from "./usecases/getProjectSearchBarConfigUsecase";
import { SearchBarConfig, SearchFiltersConfig } from "@/app/entities/common/search_tools/SearchConfig";
import { getProjectSearchFiltersConfigUsecase } from "./usecases/getProjectSearchFiltersConfigUsecase";

export const mainService = {
    async getAllProjects(): Promise<ProjectData[]> {
        return getAllProjectsUsecase.execute()
    },

    async getFullProject(): Promise<FullProject> {
        return getFullProjectUsecase.execute()
    }
}

export const projectsSearchAreaService = {
    getProjectSearchBarConfig(): SearchBarConfig {
        return getProjectSearchBarConfigUsecase.execute()
    },

    getProjectFiltersConfig(): SearchFiltersConfig {
        return getProjectSearchFiltersConfigUsecase.execute()
    }

}