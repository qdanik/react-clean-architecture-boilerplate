import { AddActionConfig, PlopGeneratorConfig } from 'plop';

const ROOT_PATH = '../../';
const DOMAIN_PATH = `${ROOT_PATH}src/domain/{{dashCase name}}`;

const PROMPTS = {
  domainName: {
    message: 'Domain name:',
    name: 'name',
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
};

type Data = {
  name: string;
  entities?: string[];
};

const config: PlopGeneratorConfig = {
  actions: (data: Data) => {
    const hasEntities = Boolean(data?.entities?.length);

    if (!data.name) {
      throw Error('Domain Name is required option.');
    }

    const actionData = {
      entities: data.entities || [],
      hasEntities,
      name: data.name,
      serviceName: data.name,
      services: [data.name],
    };
    const actions: AddActionConfig[] = [
      {
        data: actionData,
        path: `${DOMAIN_PATH}/services/{{dashCase name}}.service.ts`,
        templateFile: './templates/service.hbs',
        type: 'add',
      },
      {
        data: actionData,
        path: `${DOMAIN_PATH}/services/{{dashCase name}}.service.impl.ts`,
        templateFile: './templates/service.impl.hbs',
        type: 'add',
      },
      {
        data: actionData,
        path: `${DOMAIN_PATH}/services/{{dashCase name}}.service.container.ts`,
        templateFile: './templates/service.container.hbs',
        type: 'add',
      },
      {
        data: actionData,
        path: `${DOMAIN_PATH}/services/index.ts`,
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
    const { name, hasEntities } = await inquirer.prompt([PROMPTS.domainName, PROMPTS.haveEntities]);

    if (!hasEntities) {
      return { name };
    }

    const entities = [];
    async function askEntityName(): Promise<Data> {
      const { entityName } = await inquirer.prompt([PROMPTS.entityName]);

      if (entityName) {
        entities.push(entityName);

        return askEntityName();
      }

      return Promise.resolve({
        entities,
        name,
      });
    }

    return askEntityName();
  },
};

export default config;
