import { AddActionConfig, PlopGeneratorConfig } from 'plop';

import { DOMAIN_PATH, PROMPTS, SERVICE_DIR, SERVICE_PATH } from './constants';

type Data = {
  domainName: string;
  entities?: string[];
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
    const actions: AddActionConfig[] = [
      {
        data: actionData,
        path: `${SERVICE_PATH}.service.ts`,
        templateFile: './templates/service.hbs',
        type: 'add',
      },
      {
        data: actionData,
        path: `${SERVICE_PATH}.service.impl.ts`,
        templateFile: './templates/service.impl.hbs',
        type: 'add',
      },
      {
        data: actionData,
        path: `${SERVICE_PATH}.service.container.ts`,
        templateFile: './templates/service.container.hbs',
        type: 'add',
      },
      {
        data: actionData,
        path: `${SERVICE_DIR}index.ts`,
        templateFile: './templates/services.index.hbs',
        type: 'add',
      },
      {
        data: actionData,
        path: `${DOMAIN_PATH}/index.ts`,
        templateFile: './templates/index.hbs',
        type: 'add',
      },
    ];

    if (hasEntities) {
      data.entities.forEach(entity => {
        actions.push({
          data: {
            ...actionData,
            entity,
          },
          path: `${DOMAIN_PATH}/entities/{{dashCase entity}}.entity.ts`,
          templateFile: './templates/entity.hbs',
          type: 'add',
        });
      });

      actions.push({
        data: actionData,
        path: `${DOMAIN_PATH}/entities/index.ts`,
        templateFile: './templates/entities.index.hbs',
        type: 'add',
      });
    }

    return actions;
  },
  description: 'Add new domain',
  prompts: async (inquirer): Promise<Data> => {
    const { domainName, hasEntities } = await inquirer.prompt([
      PROMPTS.domainName,
      PROMPTS.haveEntities,
    ]);

    if (!hasEntities) {
      return { domainName };
    }

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
