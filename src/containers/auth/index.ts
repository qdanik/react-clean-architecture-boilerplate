import { ContainerModule } from 'inversify';
import { TokenAxiosAdapter, TokenHttpClientType } from '@app/data-access/auth/token-axios.adapter';

export const authAdapters = new ContainerModule(bind => {
  bind(TokenHttpClientType).to(TokenAxiosAdapter);
});
