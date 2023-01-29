import { Error, ErrorResponse } from '@package/domain/error';

export interface ErrorService {
  handle: (error: Error) => Promise<ErrorResponse>;
}
