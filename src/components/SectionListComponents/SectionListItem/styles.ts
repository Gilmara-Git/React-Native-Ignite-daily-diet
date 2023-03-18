import styled,  {css} from 'styled-components/native';

export type IndicatorListStyleProps ={
    indicatorColor: string;   
}

type ContainerWidthProps ={
    widthDimensions: number;
}


export const Container = styled.View<ContainerWidthProps>`
    width: ${({widthDimensions })=> widthDimensions > 750 ? 650 :327 }px;
    height: 49px;
    border-radius: 6px;
    border-width: 1px;
    border-color: ${({theme})=>theme.COLORS.base_gray_500};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-top: 14px;
    padding-bottom: 14px;
    padding-right: 14px;
    padding-left: 10px;
    margin-bottom: 8px;
  

`

export const Time = styled.Text`
    ${({theme})=>css`
        font-family: ${theme.FONT_FAMILY.NunitoBold700};
        color: ${theme.COLORS.base_gray_100};
    `}
    /* width: 32px; */
    height: 16px;
    font-size: 12px;
    
`
export const Separator = styled.Text`
    width: 0px;
    height: 14px;
    border-width: 1px;
    border-color: ${({theme})=>theme.COLORS.base_gray_400};
    margin: 7px;
`

export const MealName = styled.Text`
    ${({theme})=>css`
        font-family: ${theme.FONT_FAMILY.NunitoBold700};
        color: ${theme.COLORS.base_gray_200};
    `}
    width: 217px;
    height: 21px;
    font-size: 14px;
    flex: 1;
`

export const IndicatorDot = styled.View<IndicatorListStyleProps>`
    width: 14px;
    height: 14px;
    border-radius: 50px;
    background-color: ${({indicatorColor})=>indicatorColor};

`