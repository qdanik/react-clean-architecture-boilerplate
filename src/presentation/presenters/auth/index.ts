import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';
import { AuthPresenter } from './auth.presenter';
import { AuthPresenterImpl } from './auth.presenter.impl';

export const AuthPresenterType: ServiceIdentifier<AuthPresenter> = Symbol('AuthPresenter');

AppContainer.bind(AuthPresenterType).to(AuthPresenterImpl);
