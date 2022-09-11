import { Injectable } from 'containers/config';

import { RouteService } from './route.service';

@Injectable()
export class RouteServiceImpl implements RouteService {
  redirectToSignIn(): void {
    return null;
  }
}
