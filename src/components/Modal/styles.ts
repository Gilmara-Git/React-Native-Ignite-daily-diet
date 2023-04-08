import styled , { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

type InteractiveBoxStyleProps = {
    height: number;
}

export const ModalBackdrop =  styled(TouchableOpacity)`
    flex: 1;
    background-color: ${({theme})=>theme.COLORS.modal_background};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
`;

export const InteractionBox = styled.View<InteractiveBoxStyleProps>`
    width: 327px;
    height: ${({height})=>height}px;
    border-radius: 8px;
    background-color: ${({theme})=>theme.COLORS.base_gray_700};
    align-items: center;
    justify-content: center;
    padding: 10px;
`



export const Title = styled.Text`
 ${({theme})=>css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.NunitoBold700};
    color:  ${theme.COLORS.base_gray_200};
    text-align: center;
    padding-inline: 20px;
 `}
`