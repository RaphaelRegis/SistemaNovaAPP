import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavButton } from '@/entities/common/bottom_bar/NavButton';
import { bottomBarService } from '@/services/common/bottom_bar/bottom_bar.service';
import BottomBarNavButton from './BottomBarNavButton';
import { defaultBottomBarStyles } from '@/styles/common/bottom_bar/BottomBar.style';

export default function DefaultBottomBar() {
    const [navButtons, setNavButtons] = useState<NavButton[]>([]);

    useEffect(() => {
        bottomBarService.getBottomBarNavButtons().then(setNavButtons);
    }, []);

    return (
        <View style={defaultBottomBarStyles.container}>
            {navButtons.map((btn) => (
                <BottomBarNavButton key={btn.name} navButton={btn} />
            ))}
        </View>
    );
}