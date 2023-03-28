import styled, {css} from 'styled-components/native';



type ButtonTitleStyledProps = {
    color: string;
    fSize: number;
    fFamily: string;
}

export const Container = styled.TouchableOpacity`
    width: 28px;
    height: 28px;
    border-radius: 50px;
    margin-left: 20px;

`

export const Title = styled.Text<ButtonTitleStyledProps>`
    ${({fSize, fFamily, color})=>css`
        font-family: ${fFamily};
        font-size: ${fSize}px;
        color: ${color}
    
    `}

`