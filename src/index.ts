import { Movies, Quotes } from './services';

export class LordOfTheRingSDK {
  movies: Movies;
  quotes: Quotes;

  constructor() {
    this.movies = new Movies();
    this.quotes = new Quotes();
  }
}
