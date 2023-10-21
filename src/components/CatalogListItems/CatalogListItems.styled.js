import styled from 'styled-components';
import { globalStyled } from 'stylesheet/styled';

export const ButtonLearnMore = styled.button`
  width: 274px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${globalStyled.colors.white};
  background-color: ${globalStyled.colors.accent};
  border: none;

  padding: 12px 0;
  border-radius: 12px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  transition: background-color 250ms ${globalStyled.timingFunction.cubicBezier};

  &:hover,
  &:focus,
  &.active {
    background-color: ${globalStyled.colors.accentHover};
  }
`;
