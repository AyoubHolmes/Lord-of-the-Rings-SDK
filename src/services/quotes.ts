import { SDKClient } from 'src/client';
import { IAPIResponse, ICharacter, IQuote } from 'src/types';
import { Movies } from './movies';

interface IQuotesService {
  getQuoteById(id: string): Promise<IQuote | void>;
  getQuotes(): Promise<IQuote[] | void>;
}

export class Quotes implements IQuotesService {
  resourceName = 'quote';
  private movies: Movies;

  constructor() {
    this.movies = new Movies();
  }

  async getQuoteById(id: string): Promise<IQuote | void> {
    try {
      const res = await SDKClient.get<IAPIResponse<IQuote>>(`/${this.resourceName}/${id}`);
      if (typeof res !== 'undefined' && res.docs.length === 1) {
        const movieName = await this.movies.getMovieById(res.docs[0].movie);
        const characterName = await SDKClient.get<IAPIResponse<ICharacter>>(
          `/character/${res.docs[0].character}`,
        ).then((character) => {
          if (typeof character !== 'undefined' && character.docs.length === 1)
            return character.docs[0].name;
        });

        return { ...res.docs[0], movie: movieName?.name || '', character: characterName || '' };
      }
    } catch (error) {
      throw new Error(`Error in getQuoteById: ${error}`);
    }
  }

  async getQuotes(): Promise<IQuote[] | void> {
    try {
      const res = await SDKClient.get<IAPIResponse<IQuote>>(`/${this.resourceName}`);
      if (typeof res !== 'undefined') {
        return res.docs;
      }
    } catch (error) {
      throw new Error(`Error in getQuotes: ${error}`);
    }
  }
}
