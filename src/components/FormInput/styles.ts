import styled, {css} from 'styled-components/native';
import { TextInput } from 'react-native';


type InputStyleProps ={
  width: number;
  height: number;
  borderColor: string;
  borderWidth: number;
}


export const Container = styled(TextInput)<InputStyleProps>`
${({width, height, theme, borderColor , borderWidth })=>css`
    width: ${width}px;
    height: ${height}px;
    border-color: ${borderColor};
    border-width: ${borderWidth}px;
    font-size: ${theme.FONT_SIZE.BMD}px;
    font-family: ${theme.FONT_FAMILY.NunitoRegular400};
    
    `}
    margin-bottom: 30px;
    padding: 14px;
    border-radius: 6px;

`