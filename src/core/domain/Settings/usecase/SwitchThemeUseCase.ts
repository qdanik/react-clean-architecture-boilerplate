import {inject, injectable} from 'inversify';
import {SettingsGateway} from '../gateway';

@injectable()
export class SwitchThemeUseCase {
  static Type = '@settings/usecase/switchTheme';

  @inject(SettingsGateway.Type) private _settingsGateway: SettingsGateway;

  execute(): void {
    this._settingsGateway.switchTheme()
  }
}