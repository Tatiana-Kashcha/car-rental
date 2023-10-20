import styled from 'styled-components';
import { globalStyled } from 'stylesheet/styled';
import carHero from '../../images/hero-car.png';

export const Thumb = styled.div`
  background-color: ${globalStyled.colors.bgHero};
  text-align: center;
  padding: 20px 0;
  width: 100%;
  height: 500px;
  box-shadow: ${globalStyled.shadow.boxShadow};
  background-image: url(${carHero});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;

  h1 {
    font-size: 40px;
    font-weight: 700;
    color: ${globalStyled.colors.colorHero};
  }
`;
