import { View, Text } from "react-native";
import ProjectPageCommonEditButton from "../common/ProjectPageCommonEditButton";
import { Address } from "@/entities/projects/Project";
import { addressListStyles as styles } from "@/styles/projects/project_page/ProjectPage.style";

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
                            styles.addressItem,
                            index === addresses.length - 1 && { borderBottomWidth: 0 },
                        ]}
                    >
                        <Text style={styles.addressCity}>{address.city}</Text>
                        <Text style={styles.addressText}>{address.address}</Text>

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