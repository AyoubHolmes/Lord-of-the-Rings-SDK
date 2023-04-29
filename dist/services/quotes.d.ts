import { IQuote } from 'src/types';
export declare class Quotes {
    resourceName: string;
    private movies;
    constructor();
    getQuoteById(id: string): Promise<IQuote | void>;
    getQuotes(): Promise<IQuote[] | void>;
}
