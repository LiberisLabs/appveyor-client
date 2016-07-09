import AppVeyorClient from './appveyor';

export interface IAddEnvironmentRequest {
  name: string;
  provider: string;
  settings: {
    providerSettings: Array<{
      name: string;
      value: {
        value: string;
        isEncrypted: boolean;
      }
    }>;
    environmentVariables: Array<{
      name: string;
      value: {
        value: string;
        isEncrypted: boolean;
      }
    }>;
  }
}

export interface IUpdateEnvironmentRequest {
  deploymentEnvironmentId: number;
  name: string;
  environmentAccessKey: string;
  settings: {
    providerSettings: Array<{
      name: string;
      value: {
        value: string;
        isEncrypted: boolean;
      }
    }>;
    environmentVariables: Array<{
      name: string;
      value: {
        value: string;
        isEncrypted: boolean;
      }
    }>;
    provider: string;
  }
}

export default class {
  constructor(private _client: AppVeyorClient) { }

  public getEnvironment() {
    return this._client.get('/api/environments');
  }

  public getEnvironmentSettings(deploymentEnvironmentId: number) {
    return this._client.get(`/api/environments/{deploymentEnvironmentId}/settings`);
  }

  public getEnvironmentDeployments(deploymentEnvironmentId: number) {
    return this._client.get(`/api/environments/{deploymentEnvironmentId}/deployments`);
  }

  public addEnvironment(body: IAddEnvironmentRequest) {
    return this._client.post('/api/environments', body);
  }

  public updateEnvironment(body: IUpdateEnvironmentRequest) {
    return this._client.put('/api/environments', body);
  }

  public deleteEnvironment(deploymentEnvironmentId: number) {
    return this._client.delete(`/api/environments/{deploymentEnvironmentId}`);
  }
}
