import { NodePlopAPI } from 'plop';

import domain from './domain';
import entity from './entity';
import repo from './repo';
import service from './service';

export default (plop: NodePlopAPI) => {
  plop.setGenerator('domain', domain);
  plop.setGenerator('entity', entity);
  plop.setGenerator('service', service);
  plop.setGenerator('repo', repo);
  // plop.setGenerator('store', addDomain);
};
