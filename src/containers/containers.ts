import { Container } from './config';
import { coreModules } from './core';

export const container = new Container({
  autoBindInjectable: true,
});

container.load(coreModules);
