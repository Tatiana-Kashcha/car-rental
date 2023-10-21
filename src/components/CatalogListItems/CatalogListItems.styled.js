import styled from 'styled-components';
import { globalStyled } from 'stylesheet/styled';

export const Thumb = styled.div`
  width: 274px;
  height: 268px;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 2;
`;

export const Img = styled.img`
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${globalStyled.colors.primary};
  margin-bottom: 8px;
  word-spacing: 4px;
`;

export const AccentTitle = styled.span`
  color: ${globalStyled.colors.accent};
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${globalStyled.colors.primary};
`;

export const Info = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  word-spacing: 3px;
  margin-bottom: 28px;
`;

export const ButtonLearnMore = styled.button`
  width: 274px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${globalStyled.colors.white};
  background-color: ${globalStyled.colors.accent};
  border: none;

  padding: 12px 0;
  border-radius: 12px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  transition: background-color 250ms ${globalStyled.timingFunction.cubicBezier};

  &:hover,
  &:focus,
  &.active {
    background-color: ${globalStyled.colors.accentHover};
  }
`;
