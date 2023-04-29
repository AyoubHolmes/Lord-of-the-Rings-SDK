import { SDKClient } from 'src/client';
import { IAPIResponse, IQuote } from 'src/types';

export class Quotes {
  resourceName = 'quote';

  getQuoteById(id: number): Promise<IAPIResponse<IQuote> | void> {
    return SDKClient.get<IAPIResponse<IQuote>>(`/${this.resourceName}/${id}`);
  }

  getQuotes(): Promise<IAPIResponse<IQuote> | void> {
    return SDKClient.get<IAPIResponse<IQuote>>(`/${this.resourceName}`);
  }
}
