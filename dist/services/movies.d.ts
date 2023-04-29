import { IAPIResponse, IMovie } from 'src/types/movie';
export declare class Movies {
    resourceName: string;
    getMovieById(id: number): Promise<IAPIResponse<IMovie> | void>;
    getMovies(): Promise<IAPIResponse<IMovie> | void>;
}
