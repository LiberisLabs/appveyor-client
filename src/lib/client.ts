import AppVeyorClient from './appveyor';
import ProjectsClient from './projects';

export default class {
  private _client: AppVeyorClient;

  constructor(private _token: string) {
    this._client = new AppVeyorClient(_token);
  }

  public projects() {
    return new ProjectsClient(this._client);
  }
}
