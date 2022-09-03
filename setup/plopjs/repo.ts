import { ActionType, PlopGeneratorConfig } from 'plop';

import { infinityPrompt, PROMPTS, REPO_DIR, REPO_PATH } from './constants';

type Data = {
  domainName: string;
  repositories?: string[];
};

export const getRepositoriesActions = ({ data }): ActionType[] => {
  if (!data.repositories.length) {
    return [];
  }
  const actions: ActionType[] = [
    {
      data,
      path: `${REPO_DIR}index.ts`,
      skipIfExists: true,
      template: '',
      type: 'add',
    },
    {
      data,
      path: `${REPO_DIR}index.ts`,
      pattern: /$/gi,
      templateFile: './templates/repo.index.hbs',
      type: 'modify',
    },
  ];

  data.repositories.forEach(repoName => {
    const repoData = {
      ...data,
      repoName,
    };
    actions.push({
      data: repoData,
      path: `${REPO_PATH}.repo.ts`,
      templateFile: './templates/repo.hbs',
      type: 'add',
    });
    actions.push({
      data: repoData,
      path: `${REPO_PATH}.repo.impl.ts`,
      templateFile: './templates/repo.impl.hbs',
      type: 'add',
    });
    actions.push({
      data: repoData,
      path: `${REPO_PATH}.repo.container.ts`,
      templateFile: './templates/repo.container.hbs',
      type: 'add',
    });
    actions.push({
      data: repoData,
      path: `${REPO_PATH}.repo.response.ts`,
      templateFile: './templates/repo.response.hbs',
      type: 'add',
    });
  });

  return actions;
};

const config: PlopGeneratorConfig = {
  actions: (data: Data) => {
    if (!data.domainName) {
      throw Error('Domain Name is required option.');
    }

    if (!data.repositories.length) {
      throw Error('Repo Name is required option.');
    }

    return getRepositoriesActions({ data });
  },
  description: 'Add new repositories',
  prompts: async (inquirer): Promise<Data> => {
    const { domainName } = await inquirer.prompt([PROMPTS.domainName]);

    const repositories = await infinityPrompt(inquirer, PROMPTS.repoName);

    return {
      domainName,
      repositories,
    };
  },
};

export default config;
