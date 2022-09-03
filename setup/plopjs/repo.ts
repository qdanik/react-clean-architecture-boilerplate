import { PlopGeneratorConfig } from 'plop';

import { PROMPTS, REPO_DIR, REPO_PATH } from './constants';

type Data = {
  repoName: string;
  repositories?: string[];
};

const config: PlopGeneratorConfig = {
  actions: (data: Data) => {
    if (!data.repoName) {
      throw Error('Repo Name is required option.');
    }

    data.repositories = [data.repoName];

    return [
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
      {
        data,
        path: `${REPO_PATH}.repo.ts`,
        templateFile: './templates/repo.hbs',
        type: 'add',
      },
      {
        data,
        path: `${REPO_PATH}.repo.impl.ts`,
        templateFile: './templates/repo.impl.hbs',
        type: 'add',
      },
      {
        data,
        path: `${REPO_PATH}.repo.container.ts`,
        templateFile: './templates/repo.container.hbs',
        type: 'add',
      },
      {
        data,
        path: `${REPO_PATH}.repo.response.ts`,
        templateFile: './templates/repo.response.hbs',
        type: 'add',
      },
    ];
  },
  description: 'Add new repository',
  prompts: [PROMPTS.repoName],
};

export default config;
