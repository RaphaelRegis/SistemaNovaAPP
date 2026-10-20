import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Address } from '@/entities/projects/Project';
import {
    sectionStyles,
    addressListStyles as styles,
} from '@/styles/projects/project_page/ProjectPage.style';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AddressListProps {
    addresses: Address[];
}

export default function AddressList({ addresses }: AddressListProps) {
    const [expanded, setExpanded] = useState(false);
    const isEmpty = addresses.length === 0;

    const toggle = useCallback(() => {
        if (isEmpty) return;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded((prev) => !prev);
    }, [isEmpty]);

    return (
        <View style={sectionStyles.wrapper}>
            <TouchableOpacity
                style={sectionStyles.header}
                onPress={toggle}
                activeOpacity={isEmpty ? 1 : 0.7}
            >
                <View style={sectionStyles.headerLeft}>
                    <Text style={sectionStyles.headerTitle}>Endereços</Text>
                    {!isEmpty && (
                        <Text style={sectionStyles.headerCount}>({addresses.length})</Text>
                    )}
                    {isEmpty && (
                        <Text style={sectionStyles.headerCount}>(nenhum cadastrado)</Text>
                    )}
                </View>
                {!isEmpty && (
                    <Text style={sectionStyles.chevron}>{expanded ? '▲' : '▼'}</Text>
                )}
            </TouchableOpacity>

            {isEmpty && (
                <>
                    <View style={sectionStyles.divider} />
                    <View style={sectionStyles.emptyContainer}>
                        <Text style={sectionStyles.emptyText}>Nenhum endereço cadastrado.</Text>
                        <TouchableOpacity style={sectionStyles.addButton} disabled>
                            <Text style={sectionStyles.addButtonText}>+ Adicionar endereço</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}

            {!isEmpty && expanded && (
                <>
                    <View style={sectionStyles.divider} />
                    <View style={sectionStyles.body}>
                        {addresses.map((address, index) => (
                            <View
                                key={address.id}
                                style={[
                                    styles.addressItem,
                                    index === addresses.length - 1 && { borderBottomWidth: 0 },
                                ]}
                            >
                                <Text style={styles.addressCity}>{address.city}</Text>
                                <Text style={styles.addressText}>{address.address}</Text>
                            </View>
                        ))}
                    </View>
                </>
            )}
        </View>
    );
}