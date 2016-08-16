import AppVeyorClient from './appveyor';

interface INameValue {
  name: string;
  value: {
    value: string;
    isEncrypted: boolean;
  }
}

interface IAddEnvironmentRequest {
  name: string;
  provider: string;
  settings: {
    providerSettings: Array<INameValue>;
    environmentVariables: Array<INameValue>;
  }
}

interface IUpdateEnvironmentRequest {
  deploymentEnvironmentId: number;
  name: string;
  environmentAccessKey: string;
  settings: {
    providerSettings: Array<INameValue>;
    environmentVariables: Array<INameValue>;
    provider: string;
  }
}

export default class {
  constructor(private _client: AppVeyorClient) { }

  getEnvironment() {
    return this._client.get('/api/environments');
  }

  getEnvironmentSettings(deploymentEnvironmentId: number) {
    return this._client.get(`/api/environments/{deploymentEnvironmentId}/settings`);
  }

  getEnvironmentDeployments(deploymentEnvironmentId: number) {
    return this._client.get(`/api/environments/{deploymentEnvironmentId}/deployments`);
  }

  addEnvironment(body: IAddEnvironmentRequest) {
    return this._client.post('/api/environments', body);
  }

  updateEnvironment(body: IUpdateEnvironmentRequest) {
    return this._client.put('/api/environments', body);
  }

  deleteEnvironment(deploymentEnvironmentId: number) {
    return this._client.delete(`/api/environments/{deploymentEnvironmentId}`);
  }
}
