import styled , { css }from 'styled-components/native';

export type ColoredHeaderStyledProps = {
    height: number;
    backgroundColor: string; 
    fontSize: number;
    left?: number;
    top?: number;
    subtitle?: string;
}

type StatsHeaderBoxStyledProps = {
    height: number;
    backgroundColor: string;
    subtitle: string;
}

type TitleStyledProps = {
    fontSize: number;
}

type BackArrowProps = {
  left?: number;
  top?: number;
  subtitle: string;
}


export const StatsHeaderBox = styled.View<StatsHeaderBoxStyledProps>`
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: ${({ backgroundColor }) => backgroundColor };
  align-items: center;
  justify-content: center;
  flex-direction: ${({ subtitle})=> !subtitle ? 'row' : 'column'}`;


export const Title = styled.Text<TitleStyledProps>`
  ${({ theme , fontSize }) => css`
  color: ${theme.COLORS.base_gray_100};
  font-family: ${theme.FONT_FAMILY.NunitoBold700};
  font-size: ${fontSize}px;
  `}`;

  export const Subtitle = styled.Text`
    ${({ theme }) => css`
      color: ${theme.COLORS.base_gray_200};
      font-family: ${theme.FONT_FAMILY.NunitoRegular400};
      font-size: ${theme.FONT_SIZE.SM}px;
    `}
  `;

  export const BackArrowButton = styled.TouchableOpacity<BackArrowProps>`
    position: absolute;
     left: ${({left })=> left}px;
     top: ${({top  })=> top}px;
   
  `;