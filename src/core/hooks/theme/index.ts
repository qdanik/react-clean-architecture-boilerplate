import {Settings} from 'core/domain';
import {useDidMount} from 'core/hooks';
import {useService} from 'core/hooks/di';
import {useEffect, useRef} from 'react';

export function useAppTheme(): void {
  const presenter = useService<Settings.Presenter.ThemePresenter>(Settings.Presenter.ThemePresenter.Type);
  const controller = useService<Settings.Controller.ThemeController>(Settings.Controller.ThemeController.Type);
  const body = useRef(document.querySelector('body'));

  useEffect(() => {
    body.current.className = presenter.getTheme();
  }, [presenter.getTheme()]);

  useDidMount(() => controller.initializeTheme())
}