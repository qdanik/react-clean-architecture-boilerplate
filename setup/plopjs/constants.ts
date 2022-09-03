export const ROOT_PATH = '../../';

export const REPO_DIR = `${ROOT_PATH}src/data/repositories/{{dashCase domainName}}/`;
export const REPO_PATH = `${REPO_DIR}{{dashCase repoName}}`;

export const DOMAIN_PATH = `${ROOT_PATH}src/domain/{{dashCase domainName}}`;
export const SERVICE_DIR = `${DOMAIN_PATH}/services/`;
export const SERVICE_PATH = `${SERVICE_DIR}{{dashCase serviceName}}`;

export const ENTITIES_DIR = `${DOMAIN_PATH}/entities/`;
export const DTO_DIR = `${ROOT_PATH}src/data/dto/{{dashCase domainName}}/`;

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
  hasEntities: {
    message: 'Should generate entities?',
    name: 'hasEntities',
    type: 'confirm',
  },
  hasRepo: {
    message: 'Should create a repository?',
    name: 'hasRepo',
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

export const infinityPrompt = (inquirer, prompt): Promise<string[]> => {
  const result: string[] = [];

  async function handlerPrompt(): Promise<string[]> {
    const promptResult = await inquirer.prompt([prompt]);
    const answer: string = promptResult[prompt.name];

    if (answer) {
      result.push(answer);

      return handlerPrompt();
    }

    return Promise.resolve(result);
  }

  return handlerPrompt();
};
