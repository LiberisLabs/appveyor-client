import AppVeyorClient from './appveyor';

export default class {
  constructor(private _client: AppVeyorClient) { }

  getCollaborators() {
    return this._client.get('/api/collaborators');
  }

  getCollaborator(userId: number) {
    return this._client.get(`/api/collaborators/{userId}`);
  }

  addCollaborator(body: {email: string, roleId: number}) {
    return this._client.post('/api/collaborators', body);
  }

  updateCollaborator(body: {userId: number, roleId: number}) {
    return this._client.put('/api/collaborators', body);
  }

  deleteCollaborator(userId: number) {
    return this._client.delete(`/api/collaborators/{userId}`);
  }
}
