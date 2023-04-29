import { AxiosError, AxiosResponse, Method, ResponseType } from 'axios';
interface Request {
    method: Method;
    endPoint: string;
    data?: any;
    params?: any;
    responseType?: ResponseType;
}
export declare class HttpClient {
    baseUrl: string;
    constructor(baseUrl: string);
    onSuccess<T>(result: AxiosResponse<T>): T;
    onError(error: AxiosError): void;
    request<T>({ method, endPoint, data, params, responseType }: Request): Promise<T | void>;
    get<T>(endPoint: string, params?: any, responseType?: ResponseType): Promise<T | void>;
    post<T>(endPoint: string, data: any, params?: any, responseType?: ResponseType): Promise<T | void>;
}
export declare const SDKClient: HttpClient;
export {};
