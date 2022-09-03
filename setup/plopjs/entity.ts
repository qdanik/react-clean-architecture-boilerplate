import { Actions } from 'node-plop';
import { PlopGeneratorConfig } from 'plop';

import { DOMAIN_PATH, PROMPTS } from './constants';

type Data = {
  entities: string[];
  domainName: string;
};

const config: PlopGeneratorConfig = {
  actions: (data: Data) => {
    const hasEntities = Boolean(data?.entities?.length);

    if (!data.domainName) {
      throw Error('Domain Name is required option.');
    }

    if (!hasEntities) {
      throw Error('Entities is required option.');
    }
    const actions: Actions = [
      {
        data: {
          domainName: data.domainName,
          entities: data.entities || [],
        },
        path: `${DOMAIN_PATH}/entities/index.ts`,
        pattern: /$/gi,
        templateFile: './templates/entities.index.hbs',
        type: 'modify',
      },
    ];

    data.entities.forEach(entity => {
      actions.push({
        data: {
          domainName: data.domainName,
          entity,
        },
        path: `${DOMAIN_PATH}/entities/{{dashCase entity}}.entity.ts`,
        templateFile: './templates/entity.hbs',
        type: 'add',
      });
    });

    return actions;
  },
  description: 'Add new domain entities',
  prompts: async (inquirer): Promise<Data> => {
    const { domainName } = await inquirer.prompt([PROMPTS.domainName]);
    const entities = [];

    async function askEntityName(): Promise<Data> {
      const { entityName } = await inquirer.prompt([PROMPTS.entityName]);

      if (entityName) {
        entities.push(entityName);

        return askEntityName();
      }

      return Promise.resolve({
        domainName,
        entities,
      });
    }

    return askEntityName();
  },
};

export default config;
