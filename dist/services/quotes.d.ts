import { IAPIResponse, IQuote } from 'src/types';
export declare class Quotes {
    resourceName: string;
    getPostById(id: number): Promise<IAPIResponse<IQuote> | void>;
    getPosts(): Promise<IAPIResponse<IQuote> | void>;
}
