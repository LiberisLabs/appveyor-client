import { IScopedHttpClient, IHttpClientHandler } from 'scoped-http-client';

export class MockScopedHttpClient implements IScopedHttpClient {
  public header(name: string, value: string) {
    return this;
  }

  public post(body: string) {
    return (handler: IHttpClientHandler) => {
      handler(null, { statusCode: 200 }, '');
    };
  }

  public get() {
    return (handler: IHttpClientHandler) => {
      handler(null, { statusCode: 200 }, '');
    }
  }
}
