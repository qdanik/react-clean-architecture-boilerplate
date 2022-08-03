import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';

import type { AuthPresenter } from './auth.presenter';
import { AuthPresenterImpl } from './auth.presenter.impl';

const AuthPresenterType: ServiceIdentifier<AuthPresenter> = Symbol('AuthPresenter');

AppContainer.bind(AuthPresenterType).to(AuthPresenterImpl);

export { AuthPresenter, AuthPresenterType, AuthPresenterImpl };
