import { ScrollView, Text, View } from "react-native";
import ProjectInfo from "./ProjectInfo";
import { StyleSheet } from "react-native";
import { Project } from "@/app/entities/projects/Project";

interface ProjectListProps {
    projectList: Project[];
}

export default function ProjectList({ projectList }: ProjectListProps) {
    return (
        <ScrollView>
            {projectList.map((project) => (
                <ProjectInfo key={project.id} project={project} />
            ))}
        </ScrollView>
    );
}

const style = StyleSheet.create({})