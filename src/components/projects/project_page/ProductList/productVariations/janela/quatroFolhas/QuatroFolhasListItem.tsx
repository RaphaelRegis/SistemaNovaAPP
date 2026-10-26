import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { JanelaVariantData } from '@/entities/projects/Project';
import { productListStyles as styles } from '@/styles/projects/project_page/ProjectPage.style';

interface QuatroFolhasListItemProps {
    data: JanelaVariantData;
}

export default function QuatroFolhasListItem({ data }: QuatroFolhasListItemProps) {
    return (
        <View>
            <Text style={itemStyles.variantLabel}>4 Folhas</Text>

            {(data.heights.length > 0 || data.widths.length > 0) && (
                <View style={styles.productDimRow}>
                    {data.heights.length > 0 && (
                        <Text>
                            <Text style={styles.productDimLabel}>Alt: </Text>
                            <Text style={styles.productDimValue}>
                                {data.heights.join(', ')} m
                            </Text>
                        </Text>
                    )}
                    {data.widths.length > 0 && (
                        <Text>
                            <Text style={styles.productDimLabel}>Larg: </Text>
                            <Text style={styles.productDimValue}>
                                {data.widths.join(', ')} m
                            </Text>
                        </Text>
                    )}
                </View>
            )}

            <View style={itemStyles.specsRow}>
                {data.corMaterial ? (
                    <Text style={itemStyles.specChip}>{data.corMaterial}</Text>
                ) : null}
                {data.tipoVidro ? (
                    <Text style={itemStyles.specChip}>Vidro {data.tipoVidro}</Text>
                ) : null}
                {data.corVidro ? (
                    <Text style={itemStyles.specChip}>{data.corVidro}</Text>
                ) : null}
            </View>
        </View>
    );
}

const itemStyles = StyleSheet.create({
    variantLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#4a90e2',
        marginBottom: 2,
        textTransform: 'uppercase',
        letterSpacing: 0.4,
    },
    specsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
        marginTop: 2,
    },
    specChip: {
        fontSize: 11,
        color: '#666',
        backgroundColor: '#f0f4fb',
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 8,
        overflow: 'hidden',
    },
});
