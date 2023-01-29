import { ioc, ServiceIdentifier } from '@package/infrastructure/ioc';

import { RouteService } from './route.service';
import { RouteServiceImpl } from './route.service.impl';

const RouteServiceType: ServiceIdentifier<RouteService> = Symbol('RouteService');

ioc.bind(RouteServiceType).to(RouteServiceImpl);

export { RouteServiceImpl, RouteServiceType };
export type { RouteService };
