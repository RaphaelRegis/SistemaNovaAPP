import React from 'react';
import { View, Text } from 'react-native';
import { DefaultHeaderContainer, DefaultHeaderTitleContainer } from '@/styles/common/header/Header.style';

interface DefaultHeaderProps {
    title?: string;
}

export default function DefaultHeader({ title = 'Sistema Nova' }: DefaultHeaderProps) {
    return (
        <View style={DefaultHeaderContainer}>
            <Text style={DefaultHeaderTitleContainer}>{title}</Text>
        </View>
    );
}
