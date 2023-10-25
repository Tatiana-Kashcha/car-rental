import styled from 'styled-components';
import { globalStyled } from 'stylesheet/styled';

export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 40px;
`;

export const LabelBoxMake = styled.div`
  width: 224px;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: ${globalStyled.colors.placeholder};
`;

export const Select = styled.select`
  width: 100%;
  padding: 14px 18px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: ${globalStyled.colors.primary};

  cursor: pointer;
  border-radius: 14px;
  border: 1px solid ${globalStyled.colors.bgInput};
`;

export const DropdownList = styled.option`
  width: 100%;
  background-color: ${globalStyled.colors.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${globalStyled.colors.dropdown};
`;

export const LabelBoxPrice = styled.div`
  width: 125px;
`;

export const LabelBox = styled.div`
  width: 160px;
`;

export const InputMilea = styled.input`
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: ${globalStyled.colors.primary};

  height: 48px;
  width: 160px;
  border-radius: 14px;
  border: 1px solid ${globalStyled.colors.bgInput};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 136px;
  height: 48px;
  top: 20px;
  left: 20px;
  border-radius: 12px;
  border: none;
  color: ${globalStyled.colors.white};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  background-color: ${globalStyled.colors.accent};
  padding: 14px, 44px, 14px, 44px;
  transition: background-color 250ms ${globalStyled.timingFunction.cubicBezier};

  &:hover,
  &:focus {
    background-color: ${globalStyled.colors.accentHover};
    cursor: pointer;
  }
`;
