import { View } from "react-native";
import SearchBar from "../../common/DefaultSearchBar";
import SearchFilters from "../../common/DefaultSearchFilters";


export default function ProjectsSearchArea() {
    return (
        <View>
            <SearchBar />
            <SearchFilters />
        </View>
    );
}