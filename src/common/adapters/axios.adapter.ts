import axios, { AxiosInstance } from "axios";
import { HTtpAdapter } from "../interfaces/http-adapter.interface";
import { Injectable } from "@nestjs/common";


@Injectable()
export class AxiosAdapter implements HTtpAdapter{
    
    private axios: AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {
        try{
            const {data} = await this.axios.get<T>(url);
            return data;
        } catch(error){
            throw new Error(`Can't connect to the URL: ${url} - Check server logs`);
        }
    }

}