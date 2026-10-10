import { ScrollView } from "react-native"
import BottomBarNavButton from "./BottomBarNavButton"
import { NavButton } from "@/app/entities/common/bottom_bar/NavButton"
import { bottomBarService } from "@/app/services/common/bottom_bar/bottom_bar.service"

const navButtons: NavButton[] = await bottomBarService.getBottomBarNavButtons()

export default function BottomBar() {
    return (
        <ScrollView>
            {navButtons.map((navButton) => (
                <BottomBarNavButton key={navButton.name} navButton={navButton} />
            ))}
        </ScrollView>
    )
}