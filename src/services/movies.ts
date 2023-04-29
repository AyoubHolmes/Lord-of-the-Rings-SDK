import { SDKClient } from 'src/client';
import { IAPIResponse, IMovie } from 'src/types/movie';

export class Movies {
  resourceName = 'movie';

  getMovieById(id: string): Promise<IAPIResponse<IMovie> | void> {
    return SDKClient.get<IAPIResponse<IMovie>>(`/${this.resourceName}/${id}`);
  }

  getMovies(): Promise<IAPIResponse<IMovie> | void> {
    return SDKClient.get<IAPIResponse<IMovie>>(`/${this.resourceName}`);
  }
}
