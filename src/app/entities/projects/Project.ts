export interface Project {
    id: string;
    project_name: string;
    payment_methods: string[];
    observations: string;
    total_value: string;
    done: boolean;
    start_date: string;
    end_date: string;
}