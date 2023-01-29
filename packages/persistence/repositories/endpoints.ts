import { Endpoint } from '@package/infrastructure/http/endpoint';
import assign from 'lodash/assign';

export const API = {
  login: new Endpoint('/login'),
  user: assign(new Endpoint('/user/{userId}'), {
    settings: new Endpoint('/user/{userId}/settings'),
  }),
};
