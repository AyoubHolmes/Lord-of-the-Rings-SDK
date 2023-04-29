import { IAPIResponse, IQuote } from 'src/types';
export declare class Quotes {
    resourceName: string;
    getQuoteById(id: number): Promise<IAPIResponse<IQuote> | void>;
    getQuotes(): Promise<IAPIResponse<IQuote> | void>;
}
