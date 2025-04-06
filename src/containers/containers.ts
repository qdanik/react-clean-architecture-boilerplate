import { Container } from './config';
import { coreModules } from './core';

export const container = new Container({
  autobind: true,
});

container.load(coreModules);
