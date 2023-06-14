import styled from '@emotion/styled';

export const WrapStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const LogoutStyled = styled.button`
  display: flex;
  font-size: 20px;
  padding: 7px 20px;
  cursor: pointer;
  height: fit-content;
  outline: 0;
  border-color: #ffffff;
  border-radius: 15px;
  color: #5a5df7;
  font-weight: 700;
  /* background-color: #f2e53b; */
  &:hover {
    background-color: #f2e53b;
  }
  &:focus {
    background-color: #f2e53b;
  }
`;
