import styled, { css } from "styled-components/native";

export type StatisticStyleProps = {
  dynamicBackground: string;
  widthDimensions: number;
};

export const Container = styled.View<StatisticStyleProps>`
  width: ${({ widthDimensions }) => (widthDimensions > 750 ? 650 : 327)}px;
  background-color: ${({ dynamicBackground }) => dynamicBackground};
  height: 102px;
  border-radius: 8px;
`;

export const IconContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 6px;
  top: 4px;
`;
export const StatsInfo = styled.View`
  align-items: center;
  margin-top: 21px;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.base_gray_100};
    font-family: ${theme.FONT_FAMILY.NunitoBold700};
  `}
  font-size: 32px;
`;

export const PercentageText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.base_gray_200};
    font-family: ${theme.FONT_FAMILY.NunitoRegular400};
  `}
  font-size: 14px;
`;
