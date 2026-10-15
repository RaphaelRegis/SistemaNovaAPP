import { Text, View } from "react-native";
import { DefaultSearchBarContainer } from "@/app/styles/common/search_tools/SearchTools.style"

export default function SearchBar() {
    return (
        <View style={DefaultSearchBarContainer}>
            <Text>SearchBar</Text>
        </View>
    );
}