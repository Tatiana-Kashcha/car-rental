import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  margin-top: 44px;
`;

export const ListItems = styled.li`
  display: inline-block;
  flex-basis: 274px;
  height: 426px;
  text-decoration: none;
  margin-bottom: 50px;
`;

export const LoadMore = styled.a`
  display: flex;
  justify-content: center;
  border: none;
  color: rgba(52, 112, 255, 1);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(52, 112, 255, 1);
  text-decoration: underline;
  margin-bottom: 30px;
  margin-top: 50px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
    cursor: pointer;
  }
`;