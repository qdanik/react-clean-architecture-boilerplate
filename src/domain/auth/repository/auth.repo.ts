import { ServiceIdentifier } from 'containers/core';
import { AuthToken } from '../entities/auth-token.entity';

export const AuthRepoType: ServiceIdentifier<AuthRepository> = Symbol('AuthRepo');

export interface AuthRepository {
  login(login: string, password: string): Promise<AuthToken>;
}
