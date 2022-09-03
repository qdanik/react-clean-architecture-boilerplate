import assign from 'lodash/assign';

import { Endpoint } from 'core/http/endpoint';

export const API = {
  login: new Endpoint('/login'),
  user: assign(new Endpoint('/user/{userId}'), {
    settings: new Endpoint('/user/{userId}/settings'),
  }),
};
