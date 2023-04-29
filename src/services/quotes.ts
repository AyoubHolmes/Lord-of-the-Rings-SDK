import { SDKClient } from 'src/client';
import { IAPIResponse, ICharacter, IQuote } from 'src/types';
import { Movies } from './movies';

export class Quotes {
  resourceName = 'quote';

  private movies: Movies;

  constructor() {
    this.movies = new Movies();
  }

  async getQuoteById(id: string): Promise<IQuote | void> {
    return await SDKClient.get<IAPIResponse<IQuote>>(`/${this.resourceName}/${id}`).then(
      async (res) => {
        if (typeof res !== 'undefined' && res.docs.length === 1) {
          try {
            let movieName = await this.movies.getMovieById(res.docs[0].movie).then((movie) => {
              if (typeof movie !== 'undefined') return movie.name;
            });
            let characterName = await SDKClient.get<IAPIResponse<ICharacter>>(
              `/character/${res.docs[0].character}`,
            ).then((character) => {
              if (typeof character !== 'undefined' && character.docs.length === 1)
                return character.docs[0].name;
            });
            return { ...res.docs[0], movie: movieName || '', character: characterName || '' };
          } catch (err) {
            throw err;
          }
        }
      },
    );
  }

  async getQuotes(): Promise<IQuote[] | void> {
    return await SDKClient.get<IAPIResponse<IQuote>>(`/${this.resourceName}`).then(async (res) => {
      if (typeof res !== 'undefined') {
        return res.docs;
      }
    });
  }
}
