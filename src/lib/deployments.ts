import AppVeyorClient from './appveyor';

interface IStartDeploymentRequest {
  environmentName: string;
  accountName: string;
  projectSlug: string;
  buildVersion: string;
  buildJobId: string;
  environmentVariables: {[key: string]: string};
}

interface ICancelDeploymentRequest {
  deploymentId: number;
}

export default class {
  constructor(private _client: AppVeyorClient) { }

  getDeployment(deploymentId: number) {
    this._client.get(`/api/deployments{deploymentId}`)
  }

  startDeployment(body: IStartDeploymentRequest) {
    this._client.post(`/api/deployments`, body);
  }

  cancelDeployment(body: ICancelDeploymentRequest) {
    this._client.put(`/api/deployments/stop`, body);
  }
}
