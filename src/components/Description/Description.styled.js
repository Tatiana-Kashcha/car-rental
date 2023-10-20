import styled from 'styled-components';
import { globalStyled } from 'stylesheet/styled';

export const Descr = styled.div`
  background-color: ${globalStyled.colors.bgHero};
  h2 {
    font-size: 32px;
    font-weight: 600;
    color: ${globalStyled.colors.accentHover};
    margin-bottom: 20px;
  }
`;

export const Advant = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  box-shadow: 0 8px 4px -5px rgba(0, 0, 0, 0.3);
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const ListItem = styled.li`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: ${globalStyled.colors.primary};
`;

export const Cont = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;

  text-align: center;
  box-shadow: 0 8px 4px -5px rgba(0, 0, 0, 0.3);
`;
