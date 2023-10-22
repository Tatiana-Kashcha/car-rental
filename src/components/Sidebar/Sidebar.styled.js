import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as CloseIconBtn } from '../../icons/x-close.svg';
import { globalStyled } from 'stylesheet/styled';

export const DivSidebar = styled.div`
  background-color: ${globalStyled.colors.bgHero};
  width: 380px;
  padding: 20px;
  box-shadow: ${globalStyled.shadow.boxShadowHeader};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 5;

  position: fixed;
  top: 0;
  left: 128px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;
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
  color: ${globalStyled.colors.primary};

  padding: 12px 20px;
  border-radius: 12px;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;

  transition: color 250ms ${globalStyled.timingFunction.cubicBezier},
    background-color 250ms ${globalStyled.timingFunction.cubicBezier};

  &:focus,
  &.active {
    color: ${globalStyled.colors.white};
    background-color: ${globalStyled.colors.colorHero};
  }
`;

export const CloseButton = styled.button`
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
