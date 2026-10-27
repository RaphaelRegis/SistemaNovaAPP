import React from 'react';
import { View, Text } from 'react-native';
import { headerStyles } from '@/styles/common/header/Header.style';

interface DefaultHeaderProps {
    title?: string;
}

export default function DefaultHeader({ title = 'Sistema Nova' }: DefaultHeaderProps) {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.title}>{title}</Text>
        </View>
    );
}
