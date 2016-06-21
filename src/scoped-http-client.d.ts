declare module "scoped-http-client" {

  interface IHttpResponse {
    statusCode: number;
  }

  interface IHttpClientHandler {
    (err: Error, res: IHttpResponse, body: string): void;
  }

  interface IScopedHttpClient {
    header(name: string, value: string): IScopedHttpClient;
    post(body: string): (handler: IHttpClientHandler) => void;
    get(): (handler: IHttpClientHandler) => void;
  }

}