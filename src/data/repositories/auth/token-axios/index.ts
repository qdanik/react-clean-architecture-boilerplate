import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';
import { HttpClient } from 'core/http';

import { TokenAxiosAdapter } from './token-axios.adapter';

export const AuthHttpClientType: ServiceIdentifier<HttpClient> = Symbol('TokenHttpClient');

AppContainer.bind(AuthHttpClientType).to(TokenAxiosAdapter);
