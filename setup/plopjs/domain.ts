import { ActionType, PlopGeneratorConfig } from 'plop';

import { DOMAIN_PATH, infinityPrompt, PROMPTS } from './constants';
import { getEntitiesActions } from './entity';
import { getRepositoriesActions } from './repo';
import { getServiceActions } from './service';

type Data = {
  domainName: string;
  entities?: string[];
  hasRepo: boolean;
};

const config: PlopGeneratorConfig = {
  actions: (data: Data) => {
    const hasEntities = Boolean(data?.entities?.length);

    if (!data.domainName) {
      throw Error('Domain Name is required option.');
    }

    const actionData = {
      domainName: data.domainName,
      entities: data.entities || [],
      hasEntities,
      serviceName: data.domainName,
      services: [data.domainName],
    };

    const actions: ActionType[] = [
      {
        data: actionData,
        path: `${DOMAIN_PATH}/index.ts`,
        templateFile: './templates/index.hbs',
        type: 'add',
      },
    ];

    return [
      ...actions,
      ...getEntitiesActions({ actionData, data, hasEntities }),
      ...getServiceActions({ actionData, data: actionData }),
      ...getRepositoriesActions({
        data: {
          domainName: data.domainName,
          repositories: [data.domainName],
        },
      }),
    ];
  },
  description: 'Add new domain',
  prompts: async (inquirer): Promise<Data> => {
    const { domainName, hasEntities, hasRepo } = await inquirer.prompt([
      PROMPTS.domainName,
      PROMPTS.hasEntities,
      PROMPTS.hasRepo,
    ]);

    if (!hasEntities) {
      return { domainName, hasRepo };
    }

    const entities = await infinityPrompt(inquirer, PROMPTS.entityName);

    return {
      domainName,
      entities,
      hasRepo,
    };
  },
};

export default config;
