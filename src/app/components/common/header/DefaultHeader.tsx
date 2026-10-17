import React from 'react';
import { View, Text } from 'react-native';
import { DefaultHeaderContainer, DefaultHeaderTitle } from '@/app/styles/common/header/Header.style';

interface DefaultHeaderProps {
    title?: string;
}

export default function DefaultHeader({ title = 'Sistema Nova' }: DefaultHeaderProps) {
    return (
        <View style={DefaultHeaderContainer}>
            <Text style={DefaultHeaderTitle}>{title}</Text>
        </View>
    );
}
