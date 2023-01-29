import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  & > svg {
    margin-bottom: 10px;
  }

  h1 {
    color: var(--white);
    font-size: 60px;
  }
`;
