import {Settings} from 'domain';
import {observer} from 'mobx-react';
import React from 'react'
import {ThemeSwitcher} from 'ui/components/common';
import {useService} from 'ui/hooks';

export const Theme = observer(() => {
  const controller = useService<Settings.Controller.ThemeController>(Settings.Controller.ThemeController.Type);
  const presenter = useService<Settings.Presenter.ThemePresenter>(Settings.Presenter.ThemePresenter.Type);

  return <ThemeSwitcher value={presenter.getTheme()} onChange={controller.switchTheme} />
})