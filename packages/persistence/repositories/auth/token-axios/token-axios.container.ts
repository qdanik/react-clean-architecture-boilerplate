import { HttpClient } from '@package/infrastructure/http';
import { ioc, ServiceIdentifier } from '@package/infrastructure/ioc';

import { TokenAxiosAdapter } from './token-axios.adapter';

export const AuthHttpClientType: ServiceIdentifier<HttpClient> = Symbol('TokenHttpClient');

ioc.bind(AuthHttpClientType).to(TokenAxiosAdapter);
