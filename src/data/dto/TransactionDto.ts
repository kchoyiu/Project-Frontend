export interface TransactionDto {
    tid: number;
    datetime: string;
    status: string;
    total: number;
    buyer_uid: number;
    item: TransactionDtoItem[];
}

export interface TransactionDtoItem {
    tpid: number;
    product: TransactionProductDto;
    quantity: number;
    subtotal: number;
}

export interface TransactionProductDto {
    pid: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image_url: string;
}
