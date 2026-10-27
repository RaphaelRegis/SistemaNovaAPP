import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { NavButton } from '@/entities/common/bottom_bar/NavButton';
import {
    bottomBarNavButtonStyles,
} from '@/styles/common/bottom_bar/BottomBar.style';

const ICON_MAP: Record<string, string> = {
    Project: '📋',
    Projects: '📋',
    Product: '📦',
    Products: '📦',
    Notification: '🔔',
    Notifications: '🔔',
    Settings: '⚙️',
};

interface BottomBarNavButtonProps {
    navButton: NavButton;
}

export default function BottomBarNavButton({ navButton }: BottomBarNavButtonProps) {
    const router = useRouter();
    const pathname = usePathname();

    const route = navButton.route;
    const isActive = pathname === route || (route !== '/' && pathname.startsWith(route));

    return (
        <TouchableOpacity
            style={bottomBarNavButtonStyles.button}
            onPress={() => router.push(route as any)}
            activeOpacity={0.7}
        >
            <Text style={[bottomBarNavButtonStyles.icon, isActive && bottomBarNavButtonStyles.iconActive]}>
                {ICON_MAP[navButton.icon] ?? ICON_MAP[navButton.name] ?? '●'}
            </Text>
            <Text style={[bottomBarNavButtonStyles.label, isActive && bottomBarNavButtonStyles.labelActive]}>
                {navButton.name}
            </Text>
        </TouchableOpacity>
    );
}