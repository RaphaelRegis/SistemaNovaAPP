import { ScrollView, Text, View } from "react-native";
import ProjectInfo from "./ProjectInfo";
import { StyleSheet } from "react-native";
import { ProjectData } from "@/app/entities/projects/Project";
import { DefaultProjectListContainer } from "@/app/styles/projects/projects_main/ProjectMain.style"

interface ProjectListProps {
    projectList: ProjectData[];
}

export default function ProjectList({ projectList }: ProjectListProps) {
    return (
        <ScrollView style={DefaultProjectListContainer}>
            {projectList.map((project) => (
                <ProjectInfo key={project.id} project={project} />
            ))}
        </ScrollView>
    );
}

const style = StyleSheet.create({})