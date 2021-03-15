import {inject, injectable} from 'inversify';
import {SettingsGateway} from '../gateway';

@injectable()
export class InitializeThemeUseCase {
  static Type = '@settings/usecase/initialize';

  @inject(SettingsGateway.Type) private _settingsGateway: SettingsGateway;

  execute(): void {
    this._settingsGateway.initializeTheme()
  }
}