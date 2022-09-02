import { NodePlopAPI } from 'plop';

import domain from './domain';
import entity from './entity';
import service from './service';

export default (plop: NodePlopAPI) => {
  plop.setGenerator('domain', domain);
  plop.setGenerator('entity', entity);
  plop.setGenerator('service', service);
  // plop.setGenerator('repository', addDomain);
  // plop.setGenerator('store', addDomain);
  // plop.setGenerator('domain', addDomain);
};
