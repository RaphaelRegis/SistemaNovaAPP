import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { JanelaVariantData } from '@/entities/projects/Project';
import { productListStyles, itemStyles } from '@/styles/projects/project_page/ProductList.style';

interface VitroListItemProps {
    data: JanelaVariantData;
}

export default function VitroListItem({ data }: VitroListItemProps) {
    return (
        <View>
            <Text style={itemStyles.variantLabel}>Vitrô</Text>

            {(data.heights.length > 0 || data.widths.length > 0) && (
                <View style={productListStyles.productDimRow}>
                    {data.heights.length > 0 && (
                        <Text>
                            <Text style={productListStyles.productDimLabel}>Alt: </Text>
                            <Text style={productListStyles.productDimValue}>
                                {data.heights.join(', ')} m
                            </Text>
                        </Text>
                    )}
                    {data.widths.length > 0 && (
                        <Text>
                            <Text style={productListStyles.productDimLabel}>Larg: </Text>
                            <Text style={productListStyles.productDimValue}>
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
