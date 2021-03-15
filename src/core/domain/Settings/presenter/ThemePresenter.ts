import {Store} from 'core/store';
import {SettingsTheme} from 'core/store/SettingsStore/types';
import {inject, injectable} from 'inversify';

@injectable()
export class ThemePresenter {
  static Type = '@settings/presenter/theme';

  @inject(Store.Type) private _store: Store.IStore;

  getTheme(): SettingsTheme {
    return this._store.settingsStore.getTheme()
  }
}