import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 15px;
`;

export const ListItems = styled.li`
  padding: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  &::before {
    content: '';
    background: black;
    width: 6px;
    height: 6px;
    border-radius: 100%;
  }
`;
