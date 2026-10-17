import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { NavButton } from '@/app/entities/common/bottom_bar/NavButton';
import {
    BottomBarNavButtonContainer,
    BottomBarNavButtonIcon,
    BottomBarNavButtonIconActive,
    BottomBarNavButtonLabel,
    BottomBarNavButtonLabelActive,
} from '@/app/styles/common/bottom_bar/BottomBar.style';

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
            style={BottomBarNavButtonContainer}
            onPress={() => router.push(route as any)}
            activeOpacity={0.7}
        >
            <Text style={[BottomBarNavButtonIcon, isActive && BottomBarNavButtonIconActive]}>
                {ICON_MAP[navButton.icon] ?? ICON_MAP[navButton.name] ?? '●'}
            </Text>
            <Text style={[BottomBarNavButtonLabel, isActive && BottomBarNavButtonLabelActive]}>
                {navButton.name}
            </Text>
        </TouchableOpacity>
    );
}