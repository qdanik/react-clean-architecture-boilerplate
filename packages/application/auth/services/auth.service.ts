import { AuthToken } from '@package/domain/auth';

export interface AuthService {
  login(login: string, password: string): Promise<AuthToken>;
}
