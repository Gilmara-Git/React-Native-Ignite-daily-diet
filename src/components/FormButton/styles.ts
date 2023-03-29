import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

type NewButtonStyleProps = {
    width: number;
    backgroundColor: string;
    border?: number;
    borderColor?: string;
    
}

export const Container = styled(TouchableOpacity)<NewButtonStyleProps>`
    ${({backgroundColor, width, border, borderColor})=> css`
        background-color: ${backgroundColor};
        width: ${width}px;
        border-width: ${border}px;
        border-color: ${borderColor};
        height: 50px;
        border-radius: 6px;
        align-items: space-between;
        justify-content: center;
        gap: 8px;
    
    `}
    flex-direction: row;
    align-items: center;
    justify-content: center;
 
`;

export const Title = styled.Text`
${({theme})=>css`
font-family: ${theme.FONT_FAMILY.NunitoBold700};
font-size: ${theme.FONT_SIZE.SM}px;
`}
`;
