import { FullProject, ProjectData } from "@/entities/projects/Project";
import { getAllProjectsUsecase } from "./usecases/getAllProjectsUsecase";
import { getFullProjectUsecase } from "./usecases/getFullProjectUsecase";
import { getProjectSearchBarConfigUsecase } from "./usecases/getProjectSearchBarConfigUsecase";
import { SearchBarConfig, SearchFiltersConfig, SearchPayload } from "@/entities/common/search_tools/SearchConfig";
import { getProjectSearchFiltersConfigUsecase } from "./usecases/getProjectSearchFiltersConfigUsecase";
import { applyProjectSearchUsecase } from "./usecases/applyProjectSearchUsecase";

export const mainService = {
    async getAllProjects(): Promise<ProjectData[]> {
        return getAllProjectsUsecase.execute()
    },

    async getFullProject(id?: string): Promise<FullProject> {
        return getFullProjectUsecase.execute(id)
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

export const projectsListService = {
    applyProjectSearch(list: ProjectData[], payload: SearchPayload | null): ProjectData[] {
        return applyProjectSearchUsecase.execute(list, payload);
    }
}
