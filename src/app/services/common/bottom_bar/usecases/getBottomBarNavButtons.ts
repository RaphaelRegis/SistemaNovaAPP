import { NavButton } from "@/app/entities/common/bottom_bar/NavButton";

export const getBottomBarNavButtonsUsecase = {

    async execute(): Promise<NavButton[]> {

        return [
            {
                name: "Projects",
                icon: "Project",
                route: "/projects",
                is_active: true
            },
            {
                name: "Products",
                icon: "Product",
                route: "/products",
                is_active: false
            },
            {
                name: "Notifications",
                icon: "Notification",
                route: "/notifications",
                is_active: false
            },
            {
                name: "Settings",
                icon: "Settings",
                route: "/settings",
                is_active: false
            },
        ]
    }



}



