import { AppContainer } from 'containers';
import { AuthRepoType } from 'domain/auth/repository/auth.repo';
import { AuthRepoImpl } from './auth.repo.impl';

AppContainer.bind(AuthRepoType).to(AuthRepoImpl);

export { AuthRepoType };
