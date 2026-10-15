import { FullProject, ProjectData } from "@/app/entities/projects/Project";
import { getAllProjectsUsecase } from "./usecases/getAllProjectsUsecase";
import { getFullProjectUsecase } from "./usecases/getFullProjectUsecase";

export const mainService = {
    async getAllProjects(): Promise<ProjectData[]> {
        return getAllProjectsUsecase.execute()
    },

    async getFullProject(): Promise<FullProject> {
        return getFullProjectUsecase.execute()
    }
}