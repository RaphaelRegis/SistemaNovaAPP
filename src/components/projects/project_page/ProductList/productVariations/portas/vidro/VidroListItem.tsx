import React from 'react';
import { View, Text } from 'react-native';
import { PortaVariantData } from '@/entities/projects/Project';
import { productListStyles, itemStyles } from '@/styles/projects/project_page/ProductList.style';

interface VidroListItemProps {
    data: PortaVariantData;
}

export default function VidroListItem({ data }: VidroListItemProps) {
    return (
        <View>
            <Text style={itemStyles.variantLabel}>Vidro</Text>

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
                {data.corMaterial ? <Text style={itemStyles.specChip}>{data.corMaterial}</Text> : null}
                {data.tipoVidro ? <Text style={itemStyles.specChip}>Vidro {data.tipoVidro}</Text> : null}
                {data.corVidro ? <Text style={itemStyles.specChip}>{data.corVidro}</Text> : null}
            </View>
        </View>
    );
}
