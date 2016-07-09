import AppVeyorClient from './appveyor';
import ProjectsClient from './projects';
import BuildsClient from './builds';
import EnvironmentsClient from './environments';
import DeploymentsClient from './deployments';

export default class {
  private _client: AppVeyorClient;

  constructor(private _token: string) {
    this._client = new AppVeyorClient(_token);
  }

  public projects() {
    return new ProjectsClient(this._client);
  }

  public builds() {
    return new BuildsClient(this._client);
  }

  public environments() {
    return new EnvironmentsClient(this._client);
  }

  public deployments() {
    return new DeploymentsClient(this._client);
  }
}
