export interface Order {
    id: number;
    table: string;
    status: "WAITING" | "IN_PRODUCTION" | "DONE";
    products: {
        id: number;
        quantity: number;
        product: {
            name: string;
            imagePath: string;
            price: number;
        };
    }[];
}