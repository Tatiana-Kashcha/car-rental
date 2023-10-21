import styled from 'styled-components';
import { globalStyled } from 'stylesheet/styled';
import carHero from '../../images/hero-car.png';

export const Thumb = styled.div`
  background-color: ${globalStyled.colors.bgHero};
  text-align: center;
  padding: 20px 0;
  height: 540px;
  background-image: url(${carHero});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-size: 40px;
    font-weight: 700;
    color: ${globalStyled.colors.colorHero};
  }
`;
