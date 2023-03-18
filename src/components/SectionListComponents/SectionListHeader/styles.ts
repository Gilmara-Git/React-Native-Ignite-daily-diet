import styled, { css } from 'styled-components/native';

export const Container = styled.View`    
    width: 74px;
    /* height: 23px; */
    font-size: 18px;
 
`

export const HeaderTitle = styled.Text`
    ${({theme})=>css`
        font-family: ${theme.FONT_FAMILY.NunitoBold700};
        color: ${theme.COLORS.base_gray_100}
    `}
  margin-top: 25px;
  margin-bottom: 10px;
    
`