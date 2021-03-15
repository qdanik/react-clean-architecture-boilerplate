import {ThemeSwitcher} from 'components/common';
import {Settings} from 'core/domain';
import {useService} from 'core/hooks';
import {observer} from 'mobx-react';
import React from 'react'

export const Theme = observer(() => {
  const controller = useService<Settings.Controller.ThemeController>(Settings.Controller.ThemeController.Type);
  const presenter = useService<Settings.Presenter.ThemePresenter>(Settings.Presenter.ThemePresenter.Type);

  return <ThemeSwitcher value={presenter.getTheme()} onChange={controller.switchTheme} />
})