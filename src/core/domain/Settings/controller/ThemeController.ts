import {SettingsTheme} from 'core/store/SettingsStore';
import {inject, injectable} from 'inversify';
import {InitializeThemeUseCase, SetThemeUseCase, SwitchThemeUseCase} from '../usecase';

@injectable()
export class ThemeController {
  static Type = '@settings/controller/theme';

  @inject(SwitchThemeUseCase.Type) switchThemeUseCase: SwitchThemeUseCase;

  @inject(SetThemeUseCase.Type) setThemeUseCase: SetThemeUseCase;

  @inject(InitializeThemeUseCase.Type) initializeThemeUseCase: InitializeThemeUseCase;

  switchTheme = (): void => {
    this.switchThemeUseCase.execute();
  };

  initializeTheme(): void {
    this.initializeThemeUseCase.execute();
  }

  setTheme(value: SettingsTheme): void {
    this.setThemeUseCase.execute(value);
  }

}