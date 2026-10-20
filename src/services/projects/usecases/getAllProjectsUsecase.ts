import { ProjectData } from "@/entities/projects/Project";

export const getAllProjectsUsecase = {

    async execute(): Promise<ProjectData[]> {

        return [
            {
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
            {
                id: "2",
                project_name: "Reforma da Prefeitura",
                payment_methods: [
                    "dinheiro",
                    "pix"
                ],
                observations: "",
                total_value: "450.00",
                done: true,
                start_date: "09/10/2026",
                end_date: "10/10/2026"
            }
        ]
    }



}



