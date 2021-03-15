import {Services} from 'core/shared';
import {Store} from 'core/store';
import {SettingsTheme} from 'core/store/SettingsStore/types';
import {Storage} from 'core/types';
import {injectable, inject} from 'inversify';

@injectable()
export class SettingsGateway {
  static Type = '@settings/gateway/settings';

  @inject(Store.Type) private _store: Store.IStore;

  @inject(Services.StorageService.Type) private _storage: Services.StorageService;

  private _onStorageChanged = (): void => {
    this.setTheme(
      this._storage.get(Storage.Keys.Theme) as SettingsTheme
    );
  };

  initializeTheme(): () => void {
    this.setTheme(
      this._storage.get(Storage.Keys.Theme) as SettingsTheme
    );

    this._storage.subscribe(this._onStorageChanged);

    return (): void => {
      this._storage.unsubscribe(this._onStorageChanged);
    }
  }

  isDarkTheme(value: SettingsTheme): value is SettingsTheme.Dark {
    return value === SettingsTheme.Dark;
  }

  setDarkTheme(): void {
    this.setTheme(SettingsTheme.Dark);
  }

  setLightTheme(): void {
    this.setTheme(SettingsTheme.Light);
  }

  setTheme(value: SettingsTheme): void {
    this._store.settingsStore.setTheme(value)
    this._storage.set(
      Storage.Keys.Theme,
      this._store.settingsStore.getTheme()
    );
  }

  switchTheme(): void {
    if (this.isDarkTheme(this._store.settingsStore.getTheme())) {
      this.setLightTheme();

      return;
    }

    this.setDarkTheme();
  }

}