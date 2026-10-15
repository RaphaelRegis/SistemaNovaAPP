import { View } from "react-native";
import SearchBar from "../../common/search_tools/DefaultSearchBar";
import SearchFilters from "../../common/search_tools/DefaultSearchFilters";
import { DefaultProjectsSearchAreaContainer } from "@/app/styles/projects/projects_main/ProjectMain.style"

export default function ProjectsSearchArea() {
    return (
        <View style={DefaultProjectsSearchAreaContainer}>
            <SearchBar />
            <SearchFilters />
        </View>
    );
}