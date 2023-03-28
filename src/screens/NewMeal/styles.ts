import styled, {css} from 'styled-components/native';
import { TextInputProps } from 'react-native';

type FormStyleProps = {
  width: number;
}

type InputStyleProps = TextInputProps &{
  width: number;
  height: number
}

type FieldWrapperStyleProps = {
  direction: string;
  justify: string
  gap?: number;
}


export const Container = styled.View`
  align-items: center;
  background-color: ${({theme})=>theme.COLORS.base_gray_700};
  width: 100%;
  
`;

export const InnerContainer = styled.View`
  background-color: ${({theme})=>theme.COLORS.base_gray_700};
  height: 100%;
  width: 100%;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transform: translateY(-15px);
`

export const Form = styled.View<FormStyleProps>`
   width: ${({ width }) => width }px;
   margin-top: 40px;
`

export const FieldWrapper = styled.View<FieldWrapperStyleProps>`
  flex-direction: ${({direction})=> direction};
  justify-content: ${({justify})=> justify };
  gap: 8px;

`

export const FieldHolder = styled.View``;

export const Label = styled.Text`
  ${({theme})=> css`
  font-family: ${theme.FONT_FAMILY.NunitoBold700};
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.base_gray_200}
  
  `}
  margin-bottom: 4px;
`

export const Input = styled.TextInput<InputStyleProps>`
  width: ${({ width }) => width }px;
  height: ${({ height }) => height }px;
  padding: 14px;
  border-radius: 6px;
  border: 1px;
  border-color: ${({theme})=>  theme.COLORS.base_gray_500};
  margin-bottom: 30px;
  font-size: ${({theme})=> theme.FONT_SIZE.Between_SM_MD}px;
  font-family: ${({theme})=> theme.FONT_FAMILY.NunitoRegular400}
`