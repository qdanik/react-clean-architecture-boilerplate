import { TokenAxiosAdapter, TokenHttpClientType } from '@app/data-access/auth/token-axios.adapter';
import { ContainerModule } from 'inversify';

export const authAdapters = new ContainerModule(bind => {
  bind(TokenHttpClientType).to(TokenAxiosAdapter);
});
