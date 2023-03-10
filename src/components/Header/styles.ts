import styled from 'styled-components/native';

type HeaderStyleProps = {
    dimensions : number;
}

export const Container = styled.View<HeaderStyleProps>`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;  
    width: 100%;
    margin-bottom: 24px;
    padding: ${({dimensions})=> dimensions > 750 ? 24 : 0}px;
`;

export const Image = styled.Image`
    width: 82px;
    height: 37px;
`;

export const AvatarWrapper = styled.View`
    width: 40px;
    height: 40px;
    `;

export const Avatar =  styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 50px; 
    border: 2px ${({theme})=> theme.COLORS.base_gray_200};
`