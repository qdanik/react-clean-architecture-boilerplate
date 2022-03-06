import { AuthToken } from 'domain/auth';

export interface AuthRepo {
  login(login: string, password: string): Promise<AuthToken>;
}
