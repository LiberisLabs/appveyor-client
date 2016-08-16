import AppVeyorClient from './appveyor';

interface IUpdateRoleRequest {
  roleId: number;
  name: string;
  isSystem: boolean;
  created: string;
  groups: Array<{
    name: string;
    permissions: Array<{
      name: string;
      description: string;
      allowed: boolean;
    }>;
  }>;
}

export default class {
  constructor(private _client: AppVeyorClient) { }

  getRoles() {
    return this._client.get('/api/roles');
  }

  getRole(roleId: number) {
    return this._client.get(`/api/users/{roleId}`);
  }

  addRole(body: {name: string}) {
    return this._client.post('/api/roles', body);
  }

  updateRole(body: IUpdateRoleRequest) {
    return this._client.put('/api/roles', body);
  }

  deleteRole(roleId: number) {
    return this._client.delete(`/api/roles/{roleId}`);
  }
}
