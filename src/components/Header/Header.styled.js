import styled from 'styled-components';
import { globalStyled } from 'stylesheet/styled';

export const Container = styled.div`
  padding-left: 128px;
  padding-right: 128px;
  margin: 0 auto;
`;

export const DivBtn = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${globalStyled.colors.bgHero};
  box-shadow: ${globalStyled.shadow.boxShadow};
  display: flex;
  align-items: center;
  p {
    font-size: 32px;
    font-weight: 600;
    color: ${globalStyled.colors.colorHero};
    margin-left: 10px;
  }
`;

export const BurgerBtn = styled.button`
  margin-left: 60px;
  background-color: transparent;
  border: none;
  padding: 0;

  width: 34px;
  height: 34px;

  color: ${globalStyled.colors.primary};
  cursor: pointer;
`;

export const DivImg = styled.div`
  width: 100px;

  img {
    margin-left: 20px;
  }
`;
