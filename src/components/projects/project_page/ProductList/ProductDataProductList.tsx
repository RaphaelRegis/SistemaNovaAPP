import { Product } from "@/entities/projects/Project";
import { productListStyles as styles } from "@/styles/projects/project_page/ProjectPage.style";
import { Text, View } from "react-native";
import ProjectPageCommonEditButton from "../common/ProjectPageCommonEditButton";
import JanelaListItem from "./productVariations/janela/JanelaListItem";

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
                        styles.productItem,
                        index === products.length - 1 && { borderBottomWidth: 0 },
                    ]}
                >
                    {/* Nome + Preço */}
                    <View style={styles.productHeader}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>R$ {product.price}</Text>
                    </View>

                    {/* Detalhes específicos por tipo */}
                    {product.product_type === 'janela' && product.janela_data ? (
                        <JanelaListItem data={product.janela_data} />
                    ) : (
                        /* Exibição genérica: alturas e larguras livres */
                        (product.heights.length > 0 || product.widths.length > 0) && (
                            <View style={styles.productDimRow}>
                                {product.heights.length > 0 && (
                                    <Text>
                                        <Text style={styles.productDimLabel}>Alt: </Text>
                                        <Text style={styles.productDimValue}>
                                            {product.heights.join(', ')} m
                                        </Text>
                                    </Text>
                                )}
                                {product.widths.length > 0 && (
                                    <Text>
                                        <Text style={styles.productDimLabel}>Larg: </Text>
                                        <Text style={styles.productDimValue}>
                                            {product.widths.join(', ')} m
                                        </Text>
                                    </Text>
                                )}
                            </View>
                        )
                    )}

                    {/* Status */}
                    <View style={product.done ? styles.productDoneTag : styles.productPendingTag}>
                        <Text style={product.done ? styles.productDoneTagText : styles.productPendingTagText}>
                            {product.done ? '✓ Concluído' : '⏳ Pendente'}
                        </Text>
                    </View>

                    {/* Observações */}
                    {product.observations ? (
                        <Text style={styles.productObs}>{product.observations}</Text>
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