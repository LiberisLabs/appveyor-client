import AppVeyorClient from './appveyor';

export interface IStartDeploymentRequest {
  environmentName: string;
  accountName: string;
  projectSlug: string;
  buildVersion: string;
  buildJobId: string;
  environmentVariables: {[key: string]: string};
}

export default class {
  constructor(private _client: AppVeyorClient) { }

  public getDeployment(deploymentId: number) {
    return this._client.get(`/api/deployments{deploymentId}`)
  }

  public startDeployment(body: IStartDeploymentRequest) {
    return this._client.post(`/api/deployments`, body);
  }

  public cancelDeployment(body: {deploymentId: number}) {
    return this._client.put(`/api/deployments/stop`, body);
  }
}
