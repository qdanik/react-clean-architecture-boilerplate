import { Container } from 'inversify';
import { authAdapters } from './auth';
import { baseAdapters } from './base';

export const container = new Container({
  autoBindInjectable: true,
});

container.load(baseAdapters);
container.load(authAdapters);
