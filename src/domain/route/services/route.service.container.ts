import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';

import { RouteService } from './route.service';
import { RouteServiceImpl } from './route.service.impl';

const RouteServiceType: ServiceIdentifier<RouteService> = Symbol('RouteService');

AppContainer.bind(RouteServiceType).to(RouteServiceImpl);

export { RouteServiceImpl, RouteServiceType };
export type { RouteService };
