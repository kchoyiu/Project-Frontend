import axios from "axios";
import {ProductDetailDto, ProductListDto} from "../data/dto/ProductDto.ts";
import getEnvConfig from "../config/EnvConfig.ts";

const baseUrl = getEnvConfig().baseUrl
export async function getAllProduct(): Promise<ProductListDto[]> {
    try {
        const response =
            await axios.get<ProductListDto[]>(`${baseUrl}/public/product`)
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getProductDetail(pid:string): Promise<ProductDetailDto>{
    try {
        const response = await axios.get<ProductDetailDto>(`${baseUrl}/public/product/${pid}`)
        return response.data
    }catch (error){
        console.error(error)
        throw error;
    }
}

