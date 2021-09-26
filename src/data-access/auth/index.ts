import { AppContainer } from 'containers';
import { AuthRepoType } from 'domain/auth/repository/auth.repo';
import { AuthRepoAdapter } from './auth.adapter';

AppContainer.bind(AuthRepoType).to(AuthRepoAdapter);

export { AuthRepoType };
