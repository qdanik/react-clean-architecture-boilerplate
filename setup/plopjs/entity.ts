import { ActionType, PlopGeneratorConfig } from 'plop';

import { DTO_DIR, ENTITIES_DIR, infinityPrompt, PROMPTS } from './constants';

type Data = {
  entities: string[];
  domainName: string;
};

export const getEntitiesActions = ({ data, actionData, hasEntities = true }): ActionType[] => {
  if (!hasEntities) {
    return [];
  }
  const actions: ActionType[] = [
    {
      data: actionData,
      path: `${ENTITIES_DIR}index.ts`,
      skipIfExists: true,
      template: '',
      type: 'add',
    },
    {
      data: actionData,
      path: `${DTO_DIR}index.ts`,
      skipIfExists: true,
      template: '',
      type: 'add',
    },
    {
      data: actionData,
      path: `${ENTITIES_DIR}index.ts`,
      pattern: /$/gi,
      templateFile: './templates/entities.index.hbs',
      type: 'modify',
    },
    {
      data: actionData,
      path: `${DTO_DIR}index.ts`,
      pattern: /$/gi,
      templateFile: './templates/dto.index.hbs',
      type: 'modify',
    },
  ];

  data.entities.forEach(entity => {
    const entityData = {
      ...actionData,
      entity,
    };
    actions.push({
      data: entityData,
      path: `${ENTITIES_DIR}{{dashCase entity}}.entity.ts`,
      templateFile: './templates/entity.hbs',
      type: 'add',
    });
    actions.push({
      data: entityData,
      path: `${DTO_DIR}{{dashCase entity}}.dto.ts`,
      templateFile: './templates/dto.hbs',
      type: 'add',
    });
  });

  return actions;
};

const config: PlopGeneratorConfig = {
  actions: (data: Data): ActionType[] => {
    const hasEntities = Boolean(data?.entities?.length);

    if (!data.domainName) {
      throw Error('Domain Name is required option.');
    }

    if (!hasEntities) {
      throw Error('Entities is required option.');
    }
    const actionData = {
      domainName: data.domainName,
      entities: data.entities || [],
    };

    return getEntitiesActions({ actionData, data });
  },
  description: 'Add new domain entities',
  prompts: async (inquirer): Promise<Data> => {
    const { domainName } = await inquirer.prompt([PROMPTS.domainName]);
    const entities = await infinityPrompt(inquirer, PROMPTS.entityName);

    return {
      domainName,
      entities,
    };
  },
};

export default config;
