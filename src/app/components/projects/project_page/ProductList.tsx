import { Product } from "@/app/entities/projects/Project";
import { Text, View } from "react-native";
import { DefaultProductListContainer } from "@/app/styles/projects/projects_page/ProjectPage.style"

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <View style={DefaultProductListContainer}>
            {products.map((product) => (
                <Text key={product.id}>{product.name}</Text>
            ))}
        </View>
    );
}