import styled, { css } from 'styled-components/native';

type NewButtonStyleProps = {
    width: number;
    backgroundColor: string;
    
}

export const Container = styled.TouchableOpacity<NewButtonStyleProps>`
    ${({backgroundColor, width})=> css`
        width: ${width}px;
        height: 50px;
        background-color: ${backgroundColor};
        border-radius: 6px;
        align-items: space-between;
        justify-content: center;
        gap: 8px;
    
    `}
    flex-direction: row;
    align-items: center;
    justify-content: center;
 
`;

export const DotContainer = styled.Image`
    width: 8px;
    height: 8px;
    margin-right: 10px;

`;


export const Title = styled.Text`
${({theme})=>css`
font-family: ${theme.FONT_FAMILY.NunitoBold700};
font-size: ${theme.FONT_SIZE.SM}px;
`}
`;
