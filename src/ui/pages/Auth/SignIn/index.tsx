import {Auth} from 'domain';
import {ReactComponent as Logo} from 'assets/images/logo.svg';
import {FormikProps} from 'formik';
import {observer} from 'mobx-react';
import React, {useCallback, useRef} from 'react';
import {ButtonVariants, Form} from 'ui/components/common';
import {useService} from 'ui/hooks';
import {Settings} from 'ui/modules';
import {
  ApplicationName,
  Inner,
  SignInButton,
  SignInForm,
  ThemeWrapper,
  Wrapper,
} from './styles';
import {APPLICATION_NAME, SIGN_IN_LABEL} from './types';

export const SignIn = observer(() => {
  const presenter = useService<Auth.Presenter.SignInPresenter>(
    Auth.Presenter.SignInPresenter.Type,
  );
  const controller = useService<Auth.Controller.AuthController>(
    Auth.Controller.AuthController.Type
  );
  const formRef = useRef<FormikProps<any>>({} as FormikProps<any>);

  const onSubmit = useCallback(
    (values) => {
      const {email, password} = values;

      return controller.signIn(email, password);
    },
    [controller]
  );

  return (
    <Wrapper>
      <Inner>
        <Logo />
        <ApplicationName>{APPLICATION_NAME}</ApplicationName>
        <ThemeWrapper>
          <Settings.Theme />
        </ThemeWrapper>
        <SignInForm>
          <Form
            fields={presenter.getFormFields()}
            initialValues={presenter.getInitialValues()}
            validationSchema={presenter.getValidationScheme()}
            onSubmit={onSubmit}
            innerRef={formRef}
          >
            <SignInButton variant={ButtonVariants.HalfRound} type='submit'>
              {SIGN_IN_LABEL}
            </SignInButton>
          </Form>
        </SignInForm>
      </Inner>
    </Wrapper>
  );
});
