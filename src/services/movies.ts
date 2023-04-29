import { SDKClient } from 'src/client';
import { IAPIResponse, ICharacter, IMovie, IQuote } from 'src/types';

export class Movies {
  resourceName = 'movie';

  getMovies(): Promise<IMovie[] | void> {
    return SDKClient.get<IAPIResponse<IMovie>>(`/${this.resourceName}`).then((res) => {
      if (typeof res !== 'undefined') {
        return res.docs;
      }
    });
  }

  getMovieById(id: string): Promise<IMovie | void> {
    return SDKClient.get<IAPIResponse<IMovie>>(`/${this.resourceName}/${id}`).then((res) => {
      if (typeof res !== 'undefined' && res.docs.length === 1) {
        return res.docs[0];
      }
    });
  }

  async getMovieQuotesById(id: string): Promise<IQuote[] | void> {
    return await SDKClient.get<IAPIResponse<IQuote>>(`/${this.resourceName}/${id}/quote`).then(
      async (res) => {
        if (typeof res !== 'undefined') {
          let quotes: IQuote[] = [];
          for (const quote of res.docs) {
            try {
              let movieName = await this.getMovieById(quote.movie).then((movie) => {
                if (typeof movie !== 'undefined') return movie.name;
              });
              let characterName = await SDKClient.get<IAPIResponse<ICharacter>>(
                `/character/${quote.character}`,
              ).then((character) => {
                if (typeof character !== 'undefined' && character.docs.length === 1)
                  return character.docs[0].name;
              });
              quotes.push({ ...quote, movie: movieName || '', character: characterName || '' });
            } catch (err) {
              throw err;
            }
          }
          return quotes;
        }
      },
    );
  }
}
