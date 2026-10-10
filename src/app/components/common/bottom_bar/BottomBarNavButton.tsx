import { Text, View } from "react-native";
import { NavButton } from "@/app/entities/common/bottom_bar/NavButton";

interface BottomBarNavButtonProps {
    navButton: NavButton;
}

export default function BottomBarNavButton({ navButton }: BottomBarNavButtonProps) {
    return (
        <View>
            <Text>{navButton.name}</Text>
        </View>
    )
}