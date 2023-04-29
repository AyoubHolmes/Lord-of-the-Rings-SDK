import { SDKClient } from 'src/client';
import { IAPIResponse, IQuote } from 'src/types';

export class Quotes {
  resourceName = 'quote';

  getPostById(id: number): Promise<IAPIResponse<IQuote> | void> {
    return SDKClient.get<IAPIResponse<IQuote>>(`/${this.resourceName}/${id}`);
  }

  getPosts(): Promise<IAPIResponse<IQuote> | void> {
    return SDKClient.get<IAPIResponse<IQuote>>(`/${this.resourceName}`);
  }
}
