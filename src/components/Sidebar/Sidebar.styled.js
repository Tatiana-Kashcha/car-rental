import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as CloseIconBtn } from '../../icons/x-close.svg';
import { globalStyled } from 'stylesheet/styled';

export const DivSidebar = styled.div`
  background-color: ${globalStyled.colors.bgHero};
  width: 350px;
  padding: 20px;
  box-shadow: ${globalStyled.shadow.boxShadow};
  position: relative;
`;

export const Sidebar = styled.aside`
  width: 274px;
`;

export const List = styled.ul`
  li {
    font-weight: 700;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${globalStyled.colors.primary};

  padding: 12px 20px;
  border-radius: 12px;

  font-size: 16px;
  font-weight: 600;
  line-height: normal;

  transition: all 250ms ${globalStyled.timingFunction.cubicBezier};

  &:hover,
  &:focus,
  &.active {
    color: ${globalStyled.colors.white};
    background-color: ${globalStyled.colors.colorHero};
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  cursor: pointer;
  border: none;

  background-color: transparent;
`;

export const IconBtn = styled(CloseIconBtn)`
  width: 100%;
  height: 100%;

  color: ${globalStyled.colors.primary};
`;
