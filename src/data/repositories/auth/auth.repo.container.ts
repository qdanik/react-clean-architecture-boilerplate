import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';

import { AuthRepo } from './auth.repo';
import { AuthRepoImpl } from './auth.repo.impl';
import { AuthResponse } from './auth.repo.response';

const AuthRepoType: ServiceIdentifier<AuthRepo> = Symbol('AuthRepo');

AppContainer.bind(AuthRepoType).to(AuthRepoImpl);

export { AuthRepoType, AuthRepoImpl };
export type { AuthRepo, AuthResponse };
