import {TransactionDto} from "../data/dto/TransactionDto.ts";
import axios from "axios";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"
import getEnvConfig from "../config/EnvConfig.ts";

const baseUrl=getEnvConfig().baseUrl;


export async function prepareTransaction(): Promise<TransactionDto> {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}};
        const response=await axios.post(
            `${baseUrl}/transaction/prepare`,
            null,
            config
        );
        return response.data
    }catch(error){
        console.error(error)
        throw error
    }
}
export async function getTransactionById(transactionId: string): Promise<TransactionDto> {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}};
        const response=await axios.get(
            `${baseUrl}/transaction/${transactionId}`,
            config
        );
        return response.data
    }catch(error){
        console.error(error)
        throw error
    }
}

export async function payTransactionById(transactionId: string): Promise<void> {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}};
        await axios.patch(
            `${baseUrl}/transaction/${transactionId}/pay`,
            null,
            config
        );
    }catch(error){
        console.error(error)
        throw error
    }
}

export async function finishTransactionById(transactionId: string): Promise<void> {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();
        if (!accessToken) {
            throw new Error();
        }
        const config = {headers: {Authorization: `Bearer ${accessToken}`}};
        await axios.patch<TransactionDto>(
            `${baseUrl}/transaction/${transactionId}/finish`,
            null,
            config
        );
    }catch(error){
        console.error(error)
        throw error
    }
}