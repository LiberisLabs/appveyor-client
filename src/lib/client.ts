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

  get projects()      { return new ProjectsClient(this._client); }
  get builds()        { return new BuildsClient(this._client); }
  get environments()  { return new EnvironmentsClient(this._client); }
  get deployments()   { return new DeploymentsClient(this._client); }
  get users()         { return new UsersClient(this._client); }
  get collaborators() { return new CollaboratorsClient(this._client); }
  get roles()         { return new RolesClient(this._client); }
}
