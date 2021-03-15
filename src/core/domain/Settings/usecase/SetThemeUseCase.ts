import {SettingsTheme} from 'core/store/SettingsStore';
import {inject, injectable} from 'inversify';
import {SettingsGateway} from '../gateway';

@injectable()
export class SetThemeUseCase {
  static Type = '@settings/usecase/setTheme';

  @inject(SettingsGateway.Type) private _settingsGateway: SettingsGateway;

  execute(value: SettingsTheme): void {
    this._settingsGateway.setTheme(value)
  }
}