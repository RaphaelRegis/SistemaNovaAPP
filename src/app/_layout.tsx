import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import DefaultHeader from '@/app/components/common/header/DefaultHeader';
import DefaultBottomBar from '@/app/components/common/bottom_bar/DefaultBottomBar';

export default function RootLayout() {
    return (
        <SafeAreaView style={styles.root} edges={['top', 'bottom']}>
            <DefaultHeader />
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