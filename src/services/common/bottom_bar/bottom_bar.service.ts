import { NavButton } from "@/entities/common/bottom_bar/NavButton"
import { getBottomBarNavButtonsUsecase } from "./usecases/getBottomBarNavButtons"

export const bottomBarService = {

    async getBottomBarNavButtons(): Promise<NavButton[]> {
        return getBottomBarNavButtonsUsecase.execute()
    }
}