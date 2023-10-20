import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { globalStyled } from 'stylesheet/styled';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #212121;
  &.active {
    color: orangered;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const Sidebar = styled.aside``;

export const Container = styled.div`
  padding-left: 128px;
  padding-right: 128px;
  margin: 0 auto;
`;

export const List = styled.ul`
  /* padding: 20px 0px;
  margin-left: 20px;
  display: flex; */
  list-style: none;
  li {
    font-weight: 700;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
