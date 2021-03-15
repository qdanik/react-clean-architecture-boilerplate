import {Store} from 'core/store';
import {History, LocationState} from 'history';
import {inject, injectable} from 'inversify';

@injectable()
export class UserController {
  static Type = '@controller/user';

  @inject(Store.Type) private _store: Store.IStore;

  checkToken(isSignInRoute: boolean, history: History<LocationState>): void {
    const hasToken: boolean = this._store.user.hasToken();

    if(hasToken && isSignInRoute) {
      history.replace('/');
    }
    if(!hasToken && !isSignInRoute) {
      history.replace('/sign-in');
    }
  }
}