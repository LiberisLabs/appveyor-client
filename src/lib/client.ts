import AppVeyorClient from './appveyor';
import ProjectsClient from './projects';
import BuildsClient from './builds';
import EnvironmentsClient from './environments';
import DeploymentsClient from './deployments';
import UsersClient from './users';
import CollaboratorsClient from './collaborators';
import RolesClient from './roles';

export default class {
  private _client: AppVeyorClient;

  constructor(private _token: string) {
    this._client = new AppVeyorClient(_token);
  }

  projects()      { return new ProjectsClient(this._client); }
  builds()        { return new BuildsClient(this._client); }
  environments()  { return new EnvironmentsClient(this._client); }
  deployments()   { return new DeploymentsClient(this._client); }
  users()         { return new UsersClient(this._client); }
  collaborators() { return new CollaboratorsClient(this._client); }
  roles()         { return new RolesClient(this._client); }
}
