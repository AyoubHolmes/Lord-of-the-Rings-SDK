import { SDKClient } from 'src/client';
import { IAPIResponse, IMovie } from 'src/types/movie';

export class Movies {
  resourceName = 'movie';

  getMovieById(id: number): Promise<IAPIResponse<IMovie> | void> {
    return SDKClient.get<IAPIResponse<IMovie>>(`/${this.resourceName}/${id}`);
  }

  getPosts(): Promise<IAPIResponse<IMovie> | void> {
    return SDKClient.get<IAPIResponse<IMovie>>(`/${this.resourceName}`);
  }
}
