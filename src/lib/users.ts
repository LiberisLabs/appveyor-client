import AppVeyorClient from './appveyor';

export default class {
  constructor(private _client: AppVeyorClient) { }

  public getUsers() {
    return this._client.get('/api/users');
  }

  public getUser(userId: number) {
    return this._client.get(`/api/users/{userId}`);
  }

  public addUser(body: {
    fullName: string,
    email: string,
    roleId: number,
    generatePassword: boolean,
    password: string,
    confirmPassword: string
  }) {
    return this._client.post('/api/users', body);
  }

  public updateUser(body: {
    userId: number,
    fullName: string,
    email: string,
    password: string,
    roleId: number,
    successfulBuildNotification: string,
    failedBuildNotification: string,
    notifyWhenBuildStatusChangedOnly: boolean
  }) {
    return this._client.put('/api/users', body);
  }

  public deleteUser(userId: number) {
    return this._client.delete(`/api/users/{userId}`);
  }
}
