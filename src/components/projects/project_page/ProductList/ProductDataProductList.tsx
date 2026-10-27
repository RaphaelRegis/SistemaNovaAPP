import { Product } from "@/entities/projects/Project";
import { productListStyles } from "@/styles/projects/project_page/ProductList.style";
import { Text, View } from "react-native";
import ProjectPageCommonEditButton from "../common/ProjectPageCommonEditButton";
import JanelaListItem from "./productVariations/janela/JanelaListItem";
import PortaListItem from "./productVariations/portas/PortaListItem";

interface ProductDataProductListProps {
    products: Product[];
    onUpdate: (a: Product) => void;
}

export default function ProductDataProductList({ products, onUpdate }: ProductDataProductListProps) {
    return (
        <>
            {products.map((product, index) => (
                <View
                    key={product.id}
                    style={[
                        productListStyles.productItem,
                        index === products.length - 1 && { borderBottomWidth: 0 },
                    ]}
                >
                    {/* Nome + Preço */}
                    <View style={productListStyles.productHeader}>
                        <Text style={productListStyles.productName}>{product.name}</Text>
                        <Text style={productListStyles.productPrice}>R$ {product.price}</Text>
                    </View>

                    {/* Detalhes específicos por tipo */}
                    {product.product_type === 'janela' && product.janela_data ? (
                        <JanelaListItem data={product.janela_data} />
                    ) : product.product_type === 'porta' && product.porta_data ? (
                        <PortaListItem data={product.porta_data} />
                    ) : (
                        /* Exibição genérica: alturas e larguras livres */
                        (product.heights.length > 0 || product.widths.length > 0) && (
                            <View style={productListStyles.productDimRow}>
                                {product.heights.length > 0 && (
                                    <Text>
                                        <Text style={productListStyles.productDimLabel}>Alt: </Text>
                                        <Text style={productListStyles.productDimValue}>
                                            {product.heights.join(', ')} m
                                        </Text>
                                    </Text>
                                )}
                                {product.widths.length > 0 && (
                                    <Text>
                                        <Text style={productListStyles.productDimLabel}>Larg: </Text>
                                        <Text style={productListStyles.productDimValue}>
                                            {product.widths.join(', ')} m
                                        </Text>
                                    </Text>
                                )}
                            </View>
                        )
                    )}

                    {/* Status */}
                    <View style={product.done ? productListStyles.productDoneTag : productListStyles.productPendingTag}>
                        <Text style={product.done ? productListStyles.productDoneTagText : productListStyles.productPendingTagText}>
                            {product.done ? '✓ Concluído' : '⏳ Pendente'}
                        </Text>
                    </View>

                    {/* Observações */}
                    {product.observations ? (
                        <Text style={productListStyles.productObs}>{product.observations}</Text>
                    ) : null}

                    {/* Botão de editar */}
                    <ProjectPageCommonEditButton
                        onPress={() => onUpdate(product)}
                        text="Editar produto"
                    />
                </View>
            ))}
        </>
    );
}