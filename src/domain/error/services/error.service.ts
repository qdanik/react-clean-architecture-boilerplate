import { Error } from '../entities/error.entity';
import { ErrorResponse } from '../error.types';

export interface ErrorService {
  handle: (error: Error) => Promise<ErrorResponse>;
}
