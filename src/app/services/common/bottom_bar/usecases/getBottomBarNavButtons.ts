import { NavButton } from "@/app/entities/common/bottom_bar/NavButton";

export const getBottomBarNavButtonsUsecase = {

    async execute(): Promise<NavButton[]> {

        return [
            {
                name: "Projects",
                icon: "Project",
                is_active: true
            },
            {
                name: "Products",
                icon: "Product",
                is_active: false
            },
            {
                name: "Notifications",
                icon: "Notification",
                is_active: false
            },
            {
                name: "Settings",
                icon: "Settings",
                is_active: false
            },
        ]
    }



}



