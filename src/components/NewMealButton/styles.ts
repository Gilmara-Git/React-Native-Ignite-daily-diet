import styled, { css } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const NewButton = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.base_gray_200};
  height: 50px;
  width: 100%;
  border-radius: 6px;
`;

export const PlusIcon = styled(AntDesign).attrs(({ theme }) => ({
  color: theme.COLORS.base_white,
  size: 18,
}))`
  margin-right: 15px;
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.base_white};
    font-family: ${theme.FONT_FAMILY.NunitoBold700};
  `}
`;
