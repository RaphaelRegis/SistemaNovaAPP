import { Project } from "@/app/entities/projects/Project";

export const getAllProjectsUsecase = {

    async execute(): Promise<Project[]> {

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
            }
        ]
    }



}



