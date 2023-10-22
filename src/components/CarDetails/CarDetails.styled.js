import styled from 'styled-components';
import { globalStyled } from 'stylesheet/styled';

export const Details = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Thumb = styled.div`
  width: 461px;
  height: 248px;
  margin-bottom: 14px;
`;

export const Img = styled.img`
  border-radius: 14px;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Stopper = styled.img`
  border-radius: 14px;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.div`
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: ${globalStyled.colors.primary};
  margin-bottom: 8px;
  word-spacing: 3px;
`;

export const AccentTitle = styled.span`
  color: ${globalStyled.colors.accent};
`;

export const Info = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  word-spacing: 3px;
  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: ${globalStyled.colors.primary};
  word-spacing: 3px;
  margin-bottom: 24px;
`;

export const Chapter = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: ${globalStyled.colors.primary};
  word-spacing: 3px;
  margin-bottom: 8px;
`;

export const Conditions = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${globalStyled.colors.primary};
  word-spacing: 3px;

  display: flex;
  padding-left: 14px;
`;

export const Box = styled.span`
  margin-right: 20px;
  margin-bottom: 8px;
`;

export const Accent = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: ${globalStyled.colors.accent};
  word-spacing: 3px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  width: 168px;
  height: 44px;
  top: 20px;
  left: 20px;
  border-radius: 12px;
  border: none;
  color: ${globalStyled.colors.white};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  background-color: ${globalStyled.colors.accent};
  padding: 12px, 99px, 12px, 99px;
  transition: background-color 250ms ${globalStyled.timingFunction.cubicBezier};

  &:hover,
  &:focus {
    background-color: ${globalStyled.colors.accentHover};
    cursor: pointer;
  }
`;

export const LinkToContact = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: ${globalStyled.colors.white};
  word-spacing: 3px;
  text-decoration: none;
`;
