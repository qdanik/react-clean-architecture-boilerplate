import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';

import { AuthService } from './auth.service';
import { AuthServiceImpl } from './auth.service.impl';

const AuthServiceType: ServiceIdentifier<AuthService> = Symbol('AuthService');

AppContainer.bind(AuthServiceType).to(AuthServiceImpl);

export { AuthServiceImpl, AuthServiceType };
export type { AuthService };
