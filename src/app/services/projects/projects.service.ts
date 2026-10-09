import { Project } from "@/app/entities/projects/Project";
import { getAllProjectsUsecase } from "./usecases/getAllProjectsUsecase";

export const mainService = {
    async getAllProjects(): Promise<Project[]> {
        const response = await getAllProjectsUsecase.execute()
        return response
    }
}