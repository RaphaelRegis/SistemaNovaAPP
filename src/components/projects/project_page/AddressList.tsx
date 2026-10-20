import { Text, View } from "react-native";
import { Address } from "@/entities/projects/Project";
import { DefaultAddressesListContainer } from "@/styles/projects/project_page/ProjectPage.style"

interface AddressListProps {
    addresses: Address[];
}

export default function AddressList({ addresses }: AddressListProps) {
    return (
        <View style={DefaultAddressesListContainer}>
            {addresses.map((address) => (
                <Text key={address.id}>{address.address}</Text>
            ))}
        </View>
    );
}