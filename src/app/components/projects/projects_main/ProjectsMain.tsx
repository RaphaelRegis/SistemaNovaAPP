import { View } from "react-native";
import ProjectsActions from "./ProjectsActions";
import ProjectList from "./ProjectList";
import ProjectsSearchArea from "./ProjectsSearchArea";
import { StyleSheet } from "react-native";
import { Project } from "@/app/entities/projects/Project";
import { mainService } from "@/app/services/projects/projects.service";

const projectList: Project[] = await mainService.getAllProjects();

export default function ProjectMain() {
    return (
        <View>
            <ProjectsSearchArea />
            <ProjectList projectList={projectList} />
            <ProjectsActions />
        </View>
    );
}

const style = StyleSheet.create({})