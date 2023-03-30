import styled,  {css} from 'styled-components/native';

type TextStyleProps = {
    textColor: string;

}



export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    background-color: ${({theme})=>theme.COLORS.base_gray_700};
    padding: 20px;

`


export const Title = styled.Text<TextStyleProps>`
    ${({textColor, theme})=>css`
        color: ${textColor};
        font-size: ${theme.FONT_SIZE.L}px;
        font-family: ${theme.FONT_FAMILY.NunitoBold700}
        margin: 10px 15px;
       
    `
}
`;

export const Description = styled.Text<TextStyleProps>`
    ${({textColor, theme})=>css`
        color: ${textColor};
        font-size: ${theme.FONT_SIZE.BMD}px;
        text-align: center;
        margin-bottom: 50px;
        font-family: ${theme.FONT_FAMILY.NunitoRegular400}
      
    `}

`;

export const BoldDescription = styled.Text`
font-family: ${({theme})=>theme.FONT_FAMILY.NunitoBold700};


`
