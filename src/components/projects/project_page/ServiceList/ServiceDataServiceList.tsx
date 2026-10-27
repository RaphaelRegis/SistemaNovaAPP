import { serviceListStyles } from "@/styles/projects/project_page/ServiceList.style";
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
                            serviceListStyles.serviceItem,
                            index === services.length - 1 && { borderBottomWidth: 0 },
                        ]}
                    >
                        {/* Descrição + Preço */}
                        <View style={serviceListStyles.serviceHeader}>
                            <Text style={serviceListStyles.serviceDescription}>{service.description}</Text>
                            <Text style={serviceListStyles.servicePrice}>R$ {service.price}</Text>
                        </View>

                        {/* Status */}
                        <View style={service.done ? serviceListStyles.serviceDoneTag : serviceListStyles.servicePendingTag}>
                            <Text style={service.done ? serviceListStyles.serviceDoneTagText : serviceListStyles.servicePendingTagText}>
                                {service.done ? '✓ Concluído' : '⏳ Pendente'}
                            </Text>
                        </View>

                        {/* Observações */}
                        {service.observations ? (
                            <Text style={serviceListStyles.serviceObs}>{service.observations}</Text>
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