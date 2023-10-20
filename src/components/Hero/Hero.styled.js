import styled from 'styled-components';
import { globalStyled } from 'stylesheet/styled';
import carHero from '../../images/hero-car.png';

export const Thumb = styled.div`
  background-color: ${globalStyled.colors.bgHero};
  text-align: center;
  padding: 40px 0;
  width: 100%;
  height: 500px;
  box-shadow: 0 8px 4px -5px rgba(0, 0, 0, 0.3);
  background-image: url(${carHero});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  h1 {
    font-size: 40px;
    font-weight: 700;
    color: ${globalStyled.colors.accentHover};
  }
`;
