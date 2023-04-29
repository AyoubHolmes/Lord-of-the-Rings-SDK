import { IMovie, IQuote } from 'src/types';
export declare class Movies {
    resourceName: string;
    getMovies(): Promise<IMovie[] | void>;
    getMovieById(id: string): Promise<IMovie | void>;
    getMovieQuotesById(id: string): Promise<IQuote[] | void>;
}
