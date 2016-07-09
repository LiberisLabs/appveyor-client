import AppVeyorClient from './appveyor';

export default class {
  constructor(private _client: AppVeyorClient) { }

  public startBuildOfBranchMostRecentCommit(body: {
    accountName: string,
    projectSlug: string,
    branch: string,
    environmentVariables: {[key: string]: string}
  }) {
    return this._client.post('/api/builds', body);
  }

  public startBuildOfSpecificBranchCommit(body: {
    accountName: string,
    projectSlug: string,
    branch: string,
    commitId: string
  }) {
    return this._client.post('/api/builds', body);
  }

  public startBuildOfPullRequest(body: {
    accountName: string,
    projectSlug: string,
    pullRequestId: number
  }) {
    return this._client.post('/api/builds', body);
  }

  public cancelBuild(accountName: string, projectSlug: string, buildVersion: string) {
    return this._client.delete(`/api/builds/{accountName}/{projectSlug}/{buildVersion}`);
  }
}
