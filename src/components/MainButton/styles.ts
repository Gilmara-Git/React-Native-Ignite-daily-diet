import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type NewButtonStyleProps = {
  backgroundColor: string;
  height: number;
  width: number;
}

type IconStyleProps = {
  iconColor: string;
}

type ButtonTitleStyleProps = {
  titleColor: string;
}

export const NewButton = styled(TouchableOpacity)<NewButtonStyleProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${({ height }) => height}px;
  width: ${({ width }) => width }px;
  border-radius: 6px;
`;

export const PlusIcon = styled(AntDesign).attrs<IconStyleProps>(({ iconColor }) => ({
  color: iconColor,
  size: 18,
}))`
  margin-right: 15px;
`;

export const ButtonTitle = styled.Text<ButtonTitleStyleProps>`
  ${({ theme, titleColor }) => css`
    color: ${titleColor};
    font-family: ${theme.FONT_FAMILY.NunitoBold700};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
