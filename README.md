# Ayoub Boulbaz's Lord of the Rings SDK!

This Lord of the Rings SDK is a software development kit that allows developers to easily fetch data about the **Lord of the Rings** movies and quotes.

# Installation

To install the SDK, simply run:
```
npm install ayoub_boulbaz-sdk@0.1.20
```
or:
1.  Clone the SDK repository to your local machine using `git clone https://github.com/AyoubHolmes/ayoub_boulbaz-SDK.git`.
2.  Add your own API Key in the `src/constants.ts` file. 
3.  Install the required dependencies by running `npm install`.
4.  Once the dependencies are installed, you can start using the SDK in your own project

## Usage
The SDK provides five main functionalities:
1.  Fetching all the movies.
2. Fetching a single movie's information.
3. Fetching a single movie's famous quotes.
4. Fetching all the quotes in all the movies.
5. Fetching a single quote's information.

### 1- Fetching all the movies.
To fetch all the Lord of the Rings movies, you can use the `getMovies` method. This method takes no parameter.

Here's an example of how to use the `getMovies` method:
```
import { LordOfTheRingSDK } from 'ayoub_boulbaz-sdk';

const  lordOfTheRingSDK = new  LordOfTheRingSDK();

lordOfTheRingSDK.movies.getMovies()
.then(movies => console.log(movies));
```

### 2- Fetching a single movie's information.

To fetch information about a single Lord of the Rings movie, you can use the `getMovieById` method. This method takes an parameter that specifies the movie's id in the database you want to retrieve information for.

Here's an example of how to use the `getMovieById` method:
```
import { LordOfTheRingSDK } from 'ayoub_boulbaz-sdk';

const  lordOfTheRingSDK = new  LordOfTheRingSDK();

lordOfTheRingSDK.movies.getMovieById()
.then(movie => console.log(movie));
```

### 3- Fetching a single movie's famous quotes.
To fetch all the famous quotes of a Lord of the Rings movie, you can use the `getMovieQuotesById` method. This method takes an parameter that specifies the movie's id in the database you want to retrieve its quotes.

Here's an example of how to use the `getMovieQuotesById` method:
```
import { LordOfTheRingSDK } from 'ayoub_boulbaz-sdk';

const  lordOfTheRingSDK = new  LordOfTheRingSDK();

lordOfTheRingSDK.movies.getMovieQuotesById()
.then(movies => console.log(movies));
```

### 4- Fetching all the quotes in all the movies.
To fetch all the famous quotes of the Lord of the Rings movies, you can use the `getQuotes` method. This method takes no paramters.

Here's an example of how to use the `getQuotes` method:
```
import { LordOfTheRingSDK } from 'ayoub_boulbaz-sdk';

const  lordOfTheRingSDK = new  LordOfTheRingSDK();

lordOfTheRingSDK.quotes.getQuotes()
.then(movies => console.log(movies));
```

### 5- Fetching a single quote's information.
To fetch information about a single Lord of the Rings quote, you can use the `getQuoteById` method. This method takes a parameter that specifies the quote id in the database you want to retrieve information for.

Here's an example of how to use the `getQuoteById` method:
```
import { LordOfTheRingSDK } from 'ayoub_boulbaz-sdk';

const  lordOfTheRingSDK = new  LordOfTheRingSDK();

lordOfTheRingSDK.quotes.getQuoteById()
.then(movies => console.log(movies));
```