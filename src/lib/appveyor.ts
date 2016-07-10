import * as http from 'http';

interface IResponse {
  ok: boolean;
  statusCode: number;
  body: any;
}

export default class {
  protocol: string;
  hostname: string;
  port: number;

  constructor(private _token: string) {
    this.protocol = 'https:';
    this.hostname = 'ci.appveyor.com';
    this.port = 443;
  }

  get(path: string) {
    return this.do('GET', path);
  }

  post(path: string, data: any) {
    return this.do('POST', path, data);
  }

  put(path: string, data: any) {
    return this.do('PUT', path, data);
  }

  delete(path: string) {
    return this.do('DELETE', path);
  }

  private do(method: string, path: string, data?: any): Promise<IResponse> {
    const options = {
      method: method,
      protocol: this.protocol,
      port: this.port,
      hostname: this.hostname,
      path: path,
      headers: {
        'Authorization': `Bearer ${this._token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    return new Promise((resolve, reject) => {
      let req = http.request(options, (res) => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          return resolve({ok: false, statusCode: res.statusCode, body: null});
        }

        let chunks = new Array<Buffer>();
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => resolve({
          ok: true,
          statusCode: res.statusCode,
          body: JSON.parse(Buffer.concat(chunks).toString('utf8'))
        }));
      });

      req.on('error', reject);

      if (data) {
        req.write(JSON.stringify(data));
      }

      req.end();
    });
  }
}
