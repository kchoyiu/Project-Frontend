import axios from "axios";
import {CartItemDto} from "../data/dto/CartItemDto.ts";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"
import getEnvConfig from "../config/EnvConfig.ts";

const baseUrl=getEnvConfig().baseUrl

export const putCartItem  = async (pid: number, quantity: number) => {
   try {
    const accessToken = await FirebaseAuthService.getAccessToken();
    if (!accessToken) {
        throw new Error();
    }
    const config = {headers: {Authorization: `Bearer ${accessToken}`}};
    await axios.put(
        `${baseUrl}/cart/${pid}/${quantity}`,
        null,
        config
    );
    }catch(error){
       console.error(error)
       throw error
   }
}

export const getCartItem = async ():Promise<CartItemDto[]> =>{
    try {

        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}}
        const response =
            await axios.get<CartItemDto[]>(`${baseUrl}/cart`,config
            );
        return response.data;
    }catch(error){
        console.error(error)
        throw error
    }
}

export const patchCartItem = async (pid:number,quantity:number):Promise<CartItemDto> => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}};
        const response= await axios.patch<CartItemDto>(
            `${baseUrl}/cart/${pid}/${quantity}`,
            null,
            config
        );
        return response.data
    }catch(error){
        console.error(error)
        throw error
    }
}

export const deleteCartItem = async (pid: number) => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}}
        await axios.delete<CartItemDto[]>(`${baseUrl}/cart/${pid}`
            , config
        );
    } catch (error) {
        console.error(error)
        throw error
    }
}

