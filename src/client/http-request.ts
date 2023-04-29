import axios, { AxiosError, AxiosResponse, Method, ResponseType } from 'axios';

interface Request {
  method: Method;
  endPoint: string;
  data?: any;
  params?: any;
  responseType?: ResponseType;
}

export class HttpClient {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  onSuccess<T>(result: AxiosResponse<T>): T {
    return result.data;
  }

  onError(error: AxiosError) {
    throw error?.message;
  }

  async request<T>({ method, endPoint, data, params, responseType }: Request): Promise<T | void> {
    const url = /^https?:\/\//.test(endPoint) ? endPoint : `${this.baseUrl}${endPoint}`;
    return await axios({
      method,
      url,
      responseType,
      data,
      params,
      withCredentials: true,
    })
      .then(this.onSuccess<T>)
      .catch(this.onError);
  }

  async get<T>(endPoint: string, params?: any, responseType?: ResponseType): Promise<T | void> {
    return await this.request<T>({
      method: 'get',
      endPoint,
      params,
      responseType,
    });
  }
}

export const SDKClient = new HttpClient('https://the-one-api.dev/v2');
