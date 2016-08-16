import AppVeyorClient from './appveyor';

interface IAddUserRequest {
  fullName: string;
  email: string;
  roleId: number;
  generatePassword: boolean;
  password: string;
  confirmPassword: string;
}

interface IUpdateUserRequest {
  userId: number;
  fullName: string;
  email: string;
  password: string;
  roleId: number;
  successfulBuildNotification: string;
  failedBuildNotification: string;
  notifyWhenBuildStatusChangedOnly: boolean;
}

export default class {
  constructor(private _client: AppVeyorClient) { }

  getUsers() {
    return this._client.get('/api/users');
  }

  getUser(userId: number) {
    return this._client.get(`/api/users/{userId}`);
  }

  addUser(body: IAddUserRequest) {
    return this._client.post('/api/users', body);
  }

  updateUser(body: IUpdateUserRequest) {
    return this._client.put('/api/users', body);
  }

  deleteUser(userId: number) {
    return this._client.delete(`/api/users/{userId}`);
  }
}
