import styled from 'styled-components';
import { globalStyled } from 'stylesheet/styled';

export const Thumb = styled.div`
  background-color: ${globalStyled.colors.secondary};
  text-align: center;
  padding: 40px 0;
  max-width: 100%;
  h1 {
    font-size: 40px;
    font-weight: 700;
    color: ${globalStyled.colors.primary};
  }
`;

export const Img = styled.img`
  object-fit: contain;
`;
