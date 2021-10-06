import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';
import type { AuthService } from './auth.service';
import { AuthServiceImpl } from './auth.service.impl';

const AuthServiceType: ServiceIdentifier<AuthService> = Symbol('AuthService');

AppContainer.bind(AuthServiceType).to(AuthServiceImpl);

export { AuthService, AuthServiceImpl, AuthServiceType };
