import { Text, View } from "react-native";
import { DefaultHeaderContainer } from "@/app/styles/common/header/Header.style"

export default function DefaultHeader() {
    return (
        <View style={DefaultHeaderContainer}>
            <Text>DefaultHeader</Text>
        </View>
    );
}
