import styled from 'styled-components/native';

type HeaderStyleProps = {
    widthDimensions : number;
}

export const Container = styled.View<HeaderStyleProps>`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;  
    width: 100%;
    margin-bottom: 24px;
    padding: ${({widthDimensions})=> widthDimensions > 750 ? 24 : 0}px;
`;

export const Image = styled.Image`
    width: 82px;
    height: 37px;
`;

export const AvatarWrapper = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-width: 2px;
    border-color:${({theme})=>theme.COLORS.base_gray_200};
    justify-content: center;
    align-items: center; 
    border-radius: 50px; 
    /* padding: 0.5px */
    `;

export const Avatar =  styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 50px; 
    overflow: hidden;
`