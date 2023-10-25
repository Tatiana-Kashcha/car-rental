import styled from 'styled-components';
import { globalStyled } from 'stylesheet/styled';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

export const Form = styled.form`
  display: flex;
  /* width: 162px; */
  justify-content: space-evenly;
  align-items: center;
  margin: 40px 0px;
`;

export const LabelBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  font-family: ${globalStyled.fonts.fontsBody};
  color: ${globalStyled.colors.placeholder};
`;

export const InputBrand = styled.input`
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  font-family: ${globalStyled.fonts.fontsBody};
  color: ${globalStyled.colors.primary};

  height: 48px;
  width: 224px;
  border-radius: 14px;
  border: 1px solid ${globalStyled.colors.bgInput};
`;

export const InputPrice = styled.input`
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  font-family: ${globalStyled.fonts.fontsBody};
  color: ${globalStyled.colors.primary};

  height: 48px;
  width: 125px;
  border-radius: 14px;
  border: 1px solid ${globalStyled.colors.bgInput};
`;

export const InputMilea = styled.input`
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  font-family: ${globalStyled.fonts.fontsBody};
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

export const DropdownList = styled.ul`
  position: absolute;
  left: 162px;
  z-index: 10;
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: scroll;
  width: 224px;
  background-color: ${globalStyled.colors.white};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 235px;
  list-style-type: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  font-family: ${globalStyled.fonts.fontsBody};
  color: ${globalStyled.colors.dropdown};
`;

export const DropdownPriceList = styled.ul`
  position: absolute;
  left: 150px;
  z-index: 10;
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: scroll;
  width: 100px;
  background-color: ${globalStyled.colors.white};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 235px;
  margin-left: 300px;
  list-style-type: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  font-family: ${globalStyled.fonts.fontsBody};
  color: ${globalStyled.colors.dropdown};
`;

export const ChevronDown = styled(FaChevronDown)`
  width: 20px;
  height: 20px;
`;

export const ChevronUp = styled(FaChevronUp)`
  width: 20px;
  height: 20px;
`;
