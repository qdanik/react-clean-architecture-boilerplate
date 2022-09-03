import { Actions } from 'node-plop';
import { PlopGeneratorConfig } from 'plop';

import { PROMPTS, SERVICE_DIR, SERVICE_PATH } from './constants';

type Data = {
  services: string[];
  domainName: string;
};

const config: PlopGeneratorConfig = {
  actions: (data: Data) => {
    const hasServices = Boolean(data?.services?.length);

    if (!data.domainName) {
      throw Error('Domain Name is required option.');
    }

    if (!hasServices) {
      throw Error('Services is required option.');
    }
    const actions: Actions = [
      {
        data: {
          domainName: data.domainName,
          services: data.services || [],
        },
        path: `${SERVICE_DIR}/index.ts`,
        pattern: /$/gi,
        templateFile: './templates/services.index.hbs',
        type: 'modify',
      },
    ];

    data.services.forEach(service => {
      actions.push({
        data: {
          domainName: data.domainName,
          serviceName: service,
        },
        path: `${SERVICE_PATH}.service.ts`,
        templateFile: './templates/service.hbs',
        type: 'add',
      });
      actions.push({
        data: {
          domainName: data.domainName,
          serviceName: service,
        },
        path: `${SERVICE_PATH}.service.impl.ts`,
        templateFile: './templates/service.impl.hbs',
        type: 'add',
      });
      actions.push({
        data: {
          domainName: data.domainName,
          serviceName: service,
        },
        path: `${SERVICE_PATH}.service.container.ts`,
        templateFile: './templates/service.container.hbs',
        type: 'add',
      });
    });

    return actions;
  },
  description: 'Add new domain services',
  prompts: async (inquirer): Promise<Data> => {
    const { domainName } = await inquirer.prompt([PROMPTS.domainName]);
    const services = [];

    async function askServiceName(): Promise<Data> {
      const { serviceName } = await inquirer.prompt([PROMPTS.serviceName]);

      if (serviceName) {
        services.push(serviceName);

        return askServiceName();
      }

      return Promise.resolve({
        domainName,
        services,
      });
    }

    return askServiceName();
  },
};

export default config;
