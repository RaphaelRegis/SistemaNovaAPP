import { ScrollView, Text, View } from "react-native";
import ProjectInfo from "./ProjectInfo";
import { StyleSheet } from "react-native";
import { Project } from "@/app/entities/projects/Project";
import { mainService } from "@/app/services/projects/projects.service";

const projectList: Project[] = await mainService.getAllProjects();

export default function ProjectList() {
    return (
        <ScrollView>
            {projectList.map((project) => (
                <ProjectInfo key={project.id} project={project} />
            ))}
        </ScrollView>
    );
}

const style = StyleSheet.create({})