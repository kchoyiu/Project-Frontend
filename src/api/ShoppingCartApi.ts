import axios from "axios";
import {CartItemDto} from "../data/dto/CartItemDto.ts";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"

const baseUrl="http://localhost:8080"

// export async function putCartItem= async (pid:string, quantity:number) => {
//    try {
//     const accessToken = await FirebaseAuthService.getAccessToken();
//     if (!accessToken) {
//         throw new Error();
//     }
//     const config = {headers: {Authorization: `Bearer ${accessToken}`}};
//     await axios.put(
//         `${baseUrl}/cart/${pid}/${quantity}`,
//         null,
//         config
//     );
//     }catch(error){
//        console.error(error)
//        throw error
//    }
// }

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