import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.base_gray_700};
  flex: 1;
  width: 100%;
`;

export const General = styled.View`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.base_gray_700};
  transform: translateY(-30px);
  flex-grow: 1;
  align-items: center;
  padding-right: 12px;
  
`;

export const GeneralText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.NunitoBold700};
    color: ${theme.COLORS.base_gray_100};
  `}
  align-self: center;
  font-size: 14px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const RectangleBox = styled.View`
  width: 327px;
  height: 89px;
  border-radius: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.base_gray_600};
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const NumericInfo = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.NunitoBold700};
    color: ${theme.COLORS.base_gray_100};
  `}
  font-size: 24px;
`;

export const TextInfo = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.NunitoRegular400};
    color: ${theme.COLORS.base_gray_200};
  `}
  text-align: center;
`;

export const SquaredBoxesContainer = styled.View`
  flex-direction: row;
  width: 327px;
  align-items: center;
  justify-content: space-between;
`;

export const SquaredBox = styled.View`
  width: 157px;
  height: 107px;
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;
