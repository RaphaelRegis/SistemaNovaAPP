import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useSegments } from 'expo-router';
import DefaultHeader from '@/components/common/header/DefaultHeader';
import DefaultBottomBar from '@/components/common/bottom_bar/DefaultBottomBar';

const headerTitles: Record<string, string> = {
    '/projects': 'Projetos',
    '/projects/project/[id]': 'Projeto',
    '/products': 'Produtos',
    '/notifications': 'Notificações',
    '/settings': 'Configurações',
    '/about': 'Sobre',
}

export default function RootLayout() {
    const pathName = "/" + useSegments().join('/');
    const headerTitle = headerTitles[pathName] ?? pathName

    return (
        <SafeAreaView style={styles.root} edges={['top', 'bottom']}>
            <DefaultHeader title={headerTitle} />
            <View style={styles.content}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                    <Stack.Screen name="projects" />
                    <Stack.Screen name="products" />
                    <Stack.Screen name="notifications" />
                    <Stack.Screen name="settings" />
                    <Stack.Screen name="about" />
                </Stack>
            </View>
            <DefaultBottomBar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
    },
});