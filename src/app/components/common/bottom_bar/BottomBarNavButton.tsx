import { Text, View } from "react-native";
import { NavButton } from "@/app/entities/common/bottom_bar/NavButton";
import { BottomBarNavButtonContainer } from "@/app/styles/common/bottom_bar/BottomBar.style";


interface BottomBarNavButtonProps {
    navButton: NavButton;
}

export default function BottomBarNavButton({ navButton }: BottomBarNavButtonProps) {
    return (
        <View style={BottomBarNavButtonContainer}>
            <Text>{navButton.name}</Text>
        </View>
    )
}