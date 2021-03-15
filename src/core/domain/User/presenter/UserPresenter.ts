import {Store} from 'core/store';
import {inject, injectable} from 'inversify';

@injectable()
export class UserPresenter {
  static Type = '@user/presenter/type';

  @inject(Store.Type) private _store: Store.IStore;

  hasToken(): boolean {
    return this._store.user.hasToken();
  }

  isLoading(): boolean {
    return this._store.user.userData.isLoading();
  }
}