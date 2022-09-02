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
  serviceName: {
    message: 'Service name (Press enter to skip):',
    name: 'serviceName',
    type: 'input',
  },
};

type Data = {
  services: string[];
  name: string;
};

const config: PlopGeneratorConfig = {
  actions: (data: Data) => {
    const hasServices = Boolean(data?.services?.length);

    if (!data.name) {
      throw Error('Domain Name is required option.');
    }

    if (!hasServices) {
      throw Error('Services is required option.');
    }
    const actions: Actions = [
      {
        data: {
          name: data.name,
          services: data.services || [],
        },
        path: `${DOMAIN_PATH}/services/index.ts`,
        pattern: /$/gi,
        templateFile: './templates/services.index.hbs',
        type: 'modify',
      },
    ];

    data.services.forEach(service => {
      actions.push({
        data: {
          name: data.name,
          serviceName: service,
        },
        path: `${DOMAIN_PATH}/services/{{dashCase serviceName}}.service.ts`,
        templateFile: './templates/service.hbs',
        type: 'add',
      });
      actions.push({
        data: {
          name: data.name,
          serviceName: service,
        },
        path: `${DOMAIN_PATH}/services/{{dashCase serviceName}}.service.impl.ts`,
        templateFile: './templates/service.impl.hbs',
        type: 'add',
      });
      actions.push({
        data: {
          name: data.name,
          serviceName: service,
        },
        path: `${DOMAIN_PATH}/services/{{dashCase serviceName}}.service.container.ts`,
        templateFile: './templates/service.container.hbs',
        type: 'add',
      });
    });

    return actions;
  },
  description: 'Add new domain services',
  prompts: async (inquirer): Promise<Data> => {
    const { name } = await inquirer.prompt([PROMPTS.domainName]);
    const services = [];

    async function askServiceName(): Promise<Data> {
      const { serviceName } = await inquirer.prompt([PROMPTS.serviceName]);

      if (serviceName) {
        services.push(serviceName);

        return askServiceName();
      }

      return Promise.resolve({
        name,
        services,
      });
    }

    return askServiceName();
  },
};

export default config;
