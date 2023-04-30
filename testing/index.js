import {
    LordOfTheRingSDK
} from 'ayoub_boulbaz-sdk'

const lordOfTheRingSDK = new LordOfTheRingSDK();
lordOfTheRingSDK.quotes.getQuoteById("5cd96e05de30eff6ebcce84c").then(movies => console.log(movies)).catch(error => console.log('error', error))