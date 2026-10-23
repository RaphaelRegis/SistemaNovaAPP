import { serviceListStyles as styles } from "@/styles/projects/project_page/ProjectPage.style";
import { Service } from "@/entities/projects/Project";
import { Text, TouchableOpacity, View } from "react-native";
import ProjectPageCommonEditButton from "../common/ProjectPageCommonEditButton";

interface ServiceDataServiceListProps {
    services: Service[];
    onUpdate: (service: Service) => void;
}

export default function ServiceDataServiceList({ services, onUpdate }: ServiceDataServiceListProps) {
    return (
        <>
            {
                services.map((service, index) => (
                    <View
                        key={service.id}
                        style={[
                            styles.serviceItem,
                            index === services.length - 1 && { borderBottomWidth: 0 },
                        ]}
                    >
                        {/* Descrição + Preço */}
                        <View style={styles.serviceHeader}>
                            <Text style={styles.serviceDescription}>{service.description}</Text>
                            <Text style={styles.servicePrice}>R$ {service.price}</Text>
                        </View>

                        {/* Status */}
                        <View style={service.done ? styles.serviceDoneTag : styles.servicePendingTag}>
                            <Text style={service.done ? styles.serviceDoneTagText : styles.servicePendingTagText}>
                                {service.done ? '✓ Concluído' : '⏳ Pendente'}
                            </Text>
                        </View>

                        {/* Observações */}
                        {service.observations ? (
                            <Text style={styles.serviceObs}>{service.observations}</Text>
                        ) : null}

                        {/* Botão de editar serviço */}
                        <ProjectPageCommonEditButton
                            onPress={() => onUpdate(service)}
                            text="Editar serviço"
                        />
                    </View>
                ))
            }</>
    )
}