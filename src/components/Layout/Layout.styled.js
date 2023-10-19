import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

export const Sidebar = styled.aside`
  box-shadow: 0 8px 4px -5px rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  padding-left: 128px;
  padding-right: 128px;
`;

export const List = styled.ul`
  padding: 20px 0px;
  margin-left: 20px;
  display: flex;
  list-style: none;
  li {
    font-weight: 700;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
