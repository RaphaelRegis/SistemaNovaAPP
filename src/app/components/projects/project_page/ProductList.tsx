import { Product } from "@/app/entities/projects/Project";
import { Text, View } from "react-native";

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <View>
            {products.map((product) => (
                <Text key={product.id}>{product.name}</Text>
            ))}
        </View>
    );
}