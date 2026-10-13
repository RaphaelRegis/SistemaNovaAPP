import { ProjectData } from "@/app/entities/projects/Project";
import { getAllProjectsUsecase } from "./usecases/getAllProjectsUsecase";

export const mainService = {
    async getAllProjects(): Promise<ProjectData[]> {
        return getAllProjectsUsecase.execute()
    }
}