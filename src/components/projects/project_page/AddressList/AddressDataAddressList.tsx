import { View, Text } from "react-native";
import ProjectPageCommonEditButton from "../common/ProjectPageCommonEditButton";
import { Address } from "@/entities/projects/Project";
import { addressListStyles } from "@/styles/projects/project_page/AddressList.style";

interface AddressListProps {
    addresses: Address[];
    onUpdate: (a: Address) => void;
}

export default function AddressList({ addresses, onUpdate }: AddressListProps) {

    return (
        <>
            {
                addresses.map((address, index) => (
                    <View
                        key={address.id}
                        style={[
                            addressListStyles.addressItem,
                            index === addresses.length - 1 && { borderBottomWidth: 0 },
                        ]}
                    >
                        <Text style={addressListStyles.addressCity}>{address.city}</Text>
                        <Text style={addressListStyles.addressText}>{address.address}</Text>

                        {/* Botão de editar endereço*/}
                        <ProjectPageCommonEditButton
                            onPress={() => onUpdate(address)}
                            text="Editar endereço"
                        />
                    </View>
                ))
            }
        </>
    )
}