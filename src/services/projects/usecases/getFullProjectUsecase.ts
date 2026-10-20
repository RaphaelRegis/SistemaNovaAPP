import { FullProject } from "@/entities/projects/Project"


export const getFullProjectUsecase = {

    async execute(id?: string): Promise<FullProject> {

        return {
            project_data: {
                id: "1",
                project_name: "Reforma da Escola",
                payment_methods: [
                    "pix",
                    "cartão"
                ],
                observations: "desconto 10%",
                total_value: "350.00",
                done: false,
                start_date: "08/10/2026",
                end_date: ""
            },
            client_data: {
                id: "1",
                name: "João",
                whatsapp_contact: "77999999999"
            },
            address_list: [
                {
                    id: "1",
                    city: "Boa Nova",
                    address: "Rua Padre Vicente, numero 2"
                }
            ],
            product_list: [
                {
                    id: "1",
                    name: "Janela",
                    heights: [
                        "1.10"
                    ],
                    widths: [
                        "0.80"
                    ],
                    price: "200.00",
                    observations: "",
                    done: false
                }
            ],
            service_list: [
                {
                    id: "1",
                    description: "corrigir vazamento box",
                    price: "150.00",
                    observations: "",
                    done: false
                }
            ]

        }


    }
}