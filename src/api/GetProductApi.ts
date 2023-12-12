import axios from "axios";
import {ProductDetailDto, ProductListDto} from "../data/dto/ProductDto.ts";

export async function getAllProduct(): Promise<ProductListDto[]> {
    try {
        const response =
            await axios.get<ProductListDto[]>("http://localhost:8080/public/product")
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getProductDetail(pid:string): Promise<ProductDetailDto>{
    try {
        const response = await axios.get<ProductDetailDto>(`http://localhost:8080/public/product/${pid}`)
        return response.data
    }catch (error){
        console.error(error)
        throw error;
    }
}

