import { SDKClient } from 'src/client';
import { IAPIResponse, ICharacter, IMovie, IQuote } from 'src/types';

interface IMoviesService {
  getMovies(): Promise<IMovie[] | void>;
  getMovieById(id: string): Promise<IMovie | void>;
  getMovieQuotesById(id: string): Promise<IQuote[] | void>;
}

export class Movies implements IMoviesService {
  resourceName = 'movie';

  async getMovies(): Promise<IMovie[] | void> {
    try {
      const res = await SDKClient.get<IAPIResponse<IMovie>>(`/${this.resourceName}`);
      if (typeof res !== 'undefined') {
        return res.docs;
      }
    } catch (error) {
      throw new Error(`Error in getMovies: ${error}`);
    }
  }

  async getMovieById(id: string): Promise<IMovie | void> {
    try {
      const res = await SDKClient.get<IAPIResponse<IMovie>>(`/${this.resourceName}/${id}`);
      if (typeof res !== 'undefined' && res.docs.length === 1) {
        return res.docs[0];
      }
    } catch (error) {
      throw new Error(`Error in getMovieById: ${error}`);
    }
  }

  async getMovieQuotesById(id: string): Promise<IQuote[] | void> {
    try {
      const res = await SDKClient.get<IAPIResponse<IQuote>>(`/${this.resourceName}/${id}/quote`);
      if (typeof res !== 'undefined') {
        const quotes: IQuote[] = [];
        for (const quote of res.docs) {
          try {
            const movieName = await this.getMovieById(quote.movie);
            const characterName = await SDKClient.get<IAPIResponse<ICharacter>>(
              `/character/${quote.character}`,
            ).then((character) => {
              if (typeof character !== 'undefined' && character.docs.length === 1)
                return character.docs[0].name;
            });
            quotes.push({ ...quote, movie: movieName?.name || '', character: characterName || '' });
          } catch (err) {
            throw new Error(`Error in getMovieQuotesById (inner): ${err}`);
          }
        }
        return quotes;
      }
    } catch (error) {
      throw new Error(`Error in getMovieQuotesById (outer): ${error}`);
    }
  }
}
