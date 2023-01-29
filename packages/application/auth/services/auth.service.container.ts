import { ioc, ServiceIdentifier } from '@package/infrastructure/ioc';

import { AuthService } from './auth.service';
import { AuthServiceImpl } from './auth.service.impl';

const AuthServiceType: ServiceIdentifier<AuthService> = Symbol('AuthService');

ioc.bind(AuthServiceType).to(AuthServiceImpl);

export { AuthServiceImpl, AuthServiceType };
export type { AuthService };
