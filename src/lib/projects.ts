import AppVeyorClient from './appveyor';

export default class {
  constructor(private _client: AppVeyorClient) { }

  public getProjects() {
    return this._client.get('/api/projects');
  }

  public getProjectLastBuild(accountName: string, projectSlug: string) {
    return this._client.get(`/api/projects/{accountName}/{projectSlug}`);
  }

  public getProjectLastBranchBuild(accountName: string, projectSlug: string, buildBranch: string) {
    return this._client.get(`/api/projects/{accountName}/{projectSlug}/branch/{buildBranch}`);
  }

  public getProjectBuildByVersion(accountName: string, projectSlug: string, buildVersion: string) {
    return this._client.get(`/api/projects/{accountName}/{projectSlug}/build/{buildVersion}`);
  }

  public getProjectHistory(accountName: string, projectSlug: string, recordsPerPage: number, startBuildId?: string, branch?: string) {
    let url = `/api/projects/{accountName}/{projectSlug}/history?recordsNumber={recordsPerPage}`;

    if (startBuildId) {
      url += `&startBuildId={startBuildId}`;
    }

    if (branch) {
      url += `&branch={branch}`;
    }

    return this._client.get(url);
  }

  public getProjectDeployments(accountName: string, projectSlug: string) {
    return this._client.get(`/api/projects/{accountName}/{projectSlug}/deployments`);
  }

  public getProjectSettings(accountName: string, projectSlug: string) {
    return this._client.get(`/api/projects/{accountName}/{projectSlug}/settings`);
  }

  // public getProjectSettingsInYAML(accountName: string, projectSlug: string) {
  //   // GET /api/projects/{accountName}/{projectSlug}/settings/yaml
  // }

  public addProject(body: {repositoryProvider: string, repositoryName: string}) {
    return this._client.post('/api/projects', body);
  }

  public updateProject(body: any) {
    return this._client.put('/api/projects', body);
  }

  // public updateProjectSettingsInYAML(accountName: string, projectSlug: string, body: string) {
  //   // PUT /api/projects/{accountName}/{projectSlug}/settings/yaml
  // }

  public updateProjectBuildNumber(accountName: string, projectSlug: string, body: {nextBuildNumber: number}) {
    return this._client.put(`/api/projects/{accountName}/{projectSlug}/settings/build-number`, body);
  }

  public deleteProjectBuildCache(accountName: string, projectSlug: string) {
    return this._client.delete(`/api/projects/{accountName}/{projectSlug}/buildcache`);
  }

  public deleteProject(accountName: string, projectSlug: string) {
    return this._client.delete(`/api/projects/{accounntName}/{projectSlug}`);
  }
}
