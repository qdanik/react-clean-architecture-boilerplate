import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/core';
import { HttpClient } from 'core/http';
import { TokenAxiosAdapter } from './token-axios.adapter';

export const TokenHttpClientType: ServiceIdentifier<HttpClient> = Symbol('TokenHttpClient');

AppContainer.bind(TokenHttpClientType).to(TokenAxiosAdapter);
