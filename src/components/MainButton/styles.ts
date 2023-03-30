import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type NewButtonStyleProps = {
  backgroundColor: string;
  height: number;
  width: number;
  borderWidth?: number;
  borderColor?: string;

}

type IconStyleProps = {
  iconColor: string;
}

type ButtonTitleStyleProps = {
  titleColor: string;
}

export const Container = styled(TouchableOpacity)<NewButtonStyleProps>`
${({backgroundColor, height,width , borderWidth, borderColor })=>css`
      background-color: ${backgroundColor};
      height: ${height}px;
      width: ${width}px;
      border-width: ${borderWidth}px;
      border-color: ${borderColor};
`}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  gap: 8px;
`;

export const ButtonIcon = styled(Feather).attrs<IconStyleProps>(({ iconColor }) => ({
  color: iconColor,
  size: 18,
}))`

`;

export const ButtonTitle = styled.Text<ButtonTitleStyleProps>`
  ${({ theme, titleColor }) => css`
    color: ${titleColor};
    font-family: ${theme.FONT_FAMILY.NunitoBold700};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
