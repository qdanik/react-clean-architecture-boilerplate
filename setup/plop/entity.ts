import { Actions } from 'node-plop';
import { PlopGeneratorConfig } from 'plop';

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
};

type Data = {
  entities: string[];
  name: string;
};

const config: PlopGeneratorConfig = {
  actions: (data: Data) => {
    const hasEntities = Boolean(data?.entities?.length);

    if (!data.name) {
      throw Error('Domain Name is required option.');
    }

    if (!hasEntities) {
      throw Error('Entities is required option.');
    }
    const actions: Actions = [
      {
        data: {
          entities: data.entities || [],
          name: data.name,
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
          entity,
          name: data.name,
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
    const { name } = await inquirer.prompt([PROMPTS.domainName]);
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
