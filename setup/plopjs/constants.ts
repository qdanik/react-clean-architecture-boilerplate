export const ROOT_PATH = '../../';

export const REPO_DIR = `${ROOT_PATH}src/data/repositories/{{dashCase repoName}}/`;
export const REPO_PATH = `${REPO_DIR}{{dashCase repoName}}`;

export const DOMAIN_PATH = `${ROOT_PATH}src/domain/{{dashCase domainName}}`;
export const SERVICE_DIR = `${DOMAIN_PATH}/services/`;
export const SERVICE_PATH = `${SERVICE_DIR}{{dashCase serviceName}}`;

export const PROMPTS = {
  domainName: {
    message: 'Domain name:',
    name: 'domainName',
    type: 'input',
  },
  entityName: {
    message: 'Entity name (Press enter to skip):',
    name: 'entityName',
    type: 'input',
  },
  haveEntities: {
    message: 'Does your service have entities?',
    name: 'hasEntities',
    type: 'confirm',
  },
  repoName: {
    message: 'Repo name:',
    name: 'repoName',
    type: 'input',
  },
  serviceName: {
    message: 'Service name (Press enter to skip):',
    name: 'serviceName',
    type: 'input',
  },
};
