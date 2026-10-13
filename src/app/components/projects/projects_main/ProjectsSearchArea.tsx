import { View } from "react-native";
import SearchBar from "../../common/search_tools/DefaultSearchBar";
import SearchFilters from "../../common/search_tools/DefaultSearchFilters";


export default function ProjectsSearchArea() {
    return (
        <View>
            <SearchBar />
            <SearchFilters />
        </View>
    );
}