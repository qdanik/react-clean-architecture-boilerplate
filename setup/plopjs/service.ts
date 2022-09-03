import { ActionType } from 'node-plop';
import { PlopGeneratorConfig } from 'plop';

import { infinityPrompt, PROMPTS, SERVICE_DIR, SERVICE_PATH } from './constants';

type Data = {
  services: string[];
  domainName: string;
};

export const getServiceActions = ({ data, actionData }): ActionType[] => {
  const actions: ActionType[] = [];

  data.services.forEach(service => {
    const serviceData = {
      ...actionData,
      serviceName: service,
    };
    actions.push({
      abortOnFail: true,
      data: serviceData,
      path: `${SERVICE_PATH}.service.ts`,
      templateFile: './templates/service.hbs',
      type: 'add',
    });
    actions.push({
      abortOnFail: true,
      data: serviceData,
      path: `${SERVICE_PATH}.service.impl.ts`,
      templateFile: './templates/service.impl.hbs',
      type: 'add',
    });
    actions.push({
      abortOnFail: true,
      data: serviceData,
      path: `${SERVICE_PATH}.service.container.ts`,
      templateFile: './templates/service.container.hbs',
      type: 'add',
    });
  });

  return [
    ...actions,
    {
      data: actionData,
      path: `${SERVICE_DIR}/index.ts`,
      skipIfExists: true,
      template: '',
      type: 'add',
    },
    {
      data: actionData,
      path: `${SERVICE_DIR}/index.ts`,
      pattern: /$/gi,
      templateFile: './templates/services.index.hbs',
      type: 'modify',
    },
  ];
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
    const actionData = {
      domainName: data.domainName,
      services: data.services || [],
    };

    return getServiceActions({ actionData, data });
  },
  description: 'Add new domain services',
  prompts: async (inquirer): Promise<Data> => {
    const { domainName } = await inquirer.prompt([PROMPTS.domainName]);
    const services = await infinityPrompt(inquirer, PROMPTS.serviceName);

    return {
      domainName,
      services,
    };
  },
};

export default config;
