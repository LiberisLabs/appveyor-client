import AppVeyorClient from './appveyor';

export default class {
  constructor(private _client: AppVeyorClient) { }

  getProjects() {
    return this._client.get('/api/projects');
  }

  getProjectLastBuild(accountName: string, projectSlug: string) {
    return this._client.get(`/api/projects/{accountName}/{projectSlug}`);
  }

  getProjectLastBranchBuild(accountName: string, projectSlug: string, buildBranch: string) {
    return this._client.get(`/api/projects/{accountName}/{projectSlug}/branch/{buildBranch}`);
  }

  getProjectBuildByVersion(accountName: string, projectSlug: string, buildVersion: string) {
    return this._client.get(`/api/projects/{accountName}/{projectSlug}/build/{buildVersion}`);
  }

  getProjectHistory(accountName: string, projectSlug: string, recordsPerPage: number, startBuildId?: string, branch?: string) {
    let url = `/api/projects/{accountName}/{projectSlug}/history?recordsNumber={recordsPerPage}`;

    if (startBuildId) {
      url += `&startBuildId={startBuildId}`;
    }

    if (branch) {
      url += `&branch={branch}`;
    }

    return this._client.get(url);
  }

  getProjectDeployments(accountName: string, projectSlug: string) {
    return this._client.get(`/api/projects/{accountName}/{projectSlug}/deployments`);
  }

  getProjectSettings(accountName: string, projectSlug: string) {
    return this._client.get(`/api/projects/{accountName}/{projectSlug}/settings`);
  }

  // getProjectSettingsInYAML(accountName: string, projectSlug: string) {
  //   // GET /api/projects/{accountName}/{projectSlug}/settings/yaml
  // }

  addProject(body: {repositoryProvider: string, repositoryName: string}) {
    return this._client.post('/api/projects', body);
  }

  updateProject(body: any) {
    return this._client.put('/api/projects', body);
  }

  // updateProjectSettingsInYAML(accountName: string, projectSlug: string, body: string) {
  //   // PUT /api/projects/{accountName}/{projectSlug}/settings/yaml
  // }

  updateProjectBuildNumber(accountName: string, projectSlug: string, body: {nextBuildNumber: number}) {
    return this._client.put(`/api/projects/{accountName}/{projectSlug}/settings/build-number`, body);
  }

  deleteProjectBuildCache(accountName: string, projectSlug: string) {
    return this._client.delete(`/api/projects/{accountName}/{projectSlug}/buildcache`);
  }

  deleteProject(accountName: string, projectSlug: string) {
    return this._client.delete(`/api/projects/{accounntName}/{projectSlug}`);
  }
}
