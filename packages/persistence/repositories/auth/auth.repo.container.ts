import { ioc, ServiceIdentifier } from '@package/infrastructure/ioc';

import { AuthRepo } from './auth.repo';
import { AuthRepoImpl } from './auth.repo.impl';
import { AuthResponse } from './auth.repo.response';

const AuthRepoType: ServiceIdentifier<AuthRepo> = Symbol('AuthRepo');

ioc.bind(AuthRepoType).to(AuthRepoImpl);

export { AuthRepoType, AuthRepoImpl };
export type { AuthRepo, AuthResponse };
