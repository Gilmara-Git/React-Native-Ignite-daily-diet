import styled, {css} from 'styled-components/native';


type FormStyleProps = {
  width: number;
}

type FieldWrapperStyleProps = {
  direction: string;
  justify: string

}


export const Container = styled.View`
  align-items: center;
  background-color: ${({theme})=>theme.COLORS.base_gray_700};
  width: 100%;
  flex-grow:1;
  height: 100%;
 
  
`;

export const InnerContainer = styled.View`
 background-color: ${({theme})=>theme.COLORS.base_gray_700};
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
  ${({direction, justify})=>css`
  flex-direction: ${direction};
  justify-content: ${ justify };
  
  `}
  gap: 8px;

`

export const FieldHolder = styled.View``;

export const Label = styled.Text`
  ${({theme})=> css`
  font-family: ${theme.FONT_FAMILY.NunitoBold700};
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.base_gray_200};
  
  `}
  margin-bottom: 6px;
`;
export const BottomContainer = styled.View`
  flex: 1;
  background-color: ${({theme})=>theme.COLORS.base_gray_700};
  justify-content: flex-end;
  transform: translateY(-15px);

`