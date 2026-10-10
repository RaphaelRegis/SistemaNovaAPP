import { NavButton } from "@/app/entities/common/bottom_bar/NavButton";

export const getBottomBarNavButtonsUsecase = {

    async execute(): Promise<NavButton[]> {

        return [
            {
                name: "Projects",
                icon: "Project",
            },
            {
                name: "Products",
                icon: "Product",
            },
            {
                name: "Notifications",
                icon: "Notification",
            },
            {
                name: "Settings",
                icon: "Settings",
            },
        ]
    }



}



