export interface ProductListDto {
    pid: number;
    name: string;
    price: number;
    image_url: string;
    has_stock: boolean;
}

export interface ProductDetailDto {
    pid: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    stock: number;
}