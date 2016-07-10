import AppVeyorClient from './appveyor';

interface IStartBuildOfBranchMostRecentCommitRequest {
  accountName: string;
  projectSlug: string;
  branch: string;
  environmentVariables: {[key: string]: string};
}

interface IStartBuildOfSpecificBranchCommit {
  accountName: string;
  projectSlug: string;
  branch: string;
  commitId: string;
}

interface IStartBuildOfPullRequest {
  accountName: string;
  projectSlug: string;
  pullRequestId: number;
}

export default class {
  constructor(private _client: AppVeyorClient) { }

  startBuildOfBranchMostRecentCommit(body: IStartBuildOfBranchMostRecentCommitRequest) {
    return this._client.post('/api/builds', body);
  }

  startBuildOfSpecificBranchCommit(body: IStartBuildOfSpecificBranchCommit) {
    return this._client.post('/api/builds', body);
  }

  startBuildOfPullRequest(body: IStartBuildOfPullRequest) {
    return this._client.post('/api/builds', body);
  }

  cancelBuild(accountName: string, projectSlug: string, buildVersion: string) {
    return this._client.delete(`/api/builds/{accountName}/{projectSlug}/{buildVersion}`);
  }
}
