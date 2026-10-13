export interface FullProject {
    project_data: ProjectData;
    client_data: ClientData;
    address_list: Address[];
    product_list: Product[];
    service_list: Service[];
}

export interface ProjectData {
    id: string;
    project_name: string;
    payment_methods: string[];
    observations: string;
    total_value: string;
    done: boolean;
    start_date: string;
    end_date: string;
}

export interface ClientData {
    id: string;
    name: string;
    whatsapp_contact: string;
}

export interface Address {
    id: string;
    city: string;
    address: string;
}

export interface Product {
    id: string;
    name: string;
    heights: string[];
    widths: string[];
    price: string;
    observations: string;
    done: boolean;
}

export interface Service {
    id: string;
    description: string;
    price: string;
    observations: string;
    done: boolean;
}