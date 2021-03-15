import {FormButton, Box} from 'components/common';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 154px; // logo height + application name full height
`;

export const ApplicationName = styled.h1`
  margin: 30px 0 15px;
  font-size: 20px;
  color: var(--gray);
`;

export const SignInForm = styled(Box)`
  width: 400px;
  max-width: 100%;
  padding: 30px;
`;

export const ThemeWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const SignInButton = styled(FormButton)`
  margin-top: 45px;
`;