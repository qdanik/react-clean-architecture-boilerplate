import { baseAdapters } from './base';
import { Container } from './config';

export const containers = new Container({
  autoBindInjectable: true,
});

containers.load(baseAdapters);
