import assign from 'lodash/assign';

import { Route } from './entities';

export const ROUTES = {
  signIn: new Route('/sign-in'),
  signOut: new Route('/sign-out'),
  users: assign(new Route('/users'), {
    list: new Route('/users/list'),
    stats: new Route('/users/stats'),
  }),
};
