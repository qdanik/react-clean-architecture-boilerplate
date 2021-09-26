import { AuthToken } from '../entities/auth-token.entity';

export interface AuthService {
  login(login: string, password: string): Promise<AuthToken>;
}
