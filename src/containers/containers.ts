import { baseAdapters } from './base';
import { Container } from './core';

export const containers = new Container({
  autoBindInjectable: true,
});

containers.load(baseAdapters);
