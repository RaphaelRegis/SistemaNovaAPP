import { View } from "react-native";
import ProjectsActions from "./ProjectsActions";
import ProjectList from "./ProjectList";
import ProjectsSearchArea from "./ProjectsSearchArea";
import { StyleSheet } from "react-native";

export default function ProjectMain() {
    return (
        <View>
            <ProjectsSearchArea />
            <ProjectList />
            <ProjectsActions />
        </View>
    );
}

const style = StyleSheet.create({})