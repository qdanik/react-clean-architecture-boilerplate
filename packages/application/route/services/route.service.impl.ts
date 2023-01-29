import { Injectable } from '@package/infrastructure/ioc';

import { RouteService } from './route.service';

@Injectable()
export class RouteServiceImpl implements RouteService {
  redirectToSignIn(): void {
    return null;
  }
}
