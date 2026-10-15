import { Text, View } from "react-native";
import { Address } from "@/app/entities/projects/Project";

interface AddressListProps {
    addresses: Address[];
}

export default function AddressList({ addresses }: AddressListProps) {
    return (
        <View>
            {addresses.map((address) => (
                <Text key={address.id}>{address.address}</Text>
            ))}
        </View>
    );
}