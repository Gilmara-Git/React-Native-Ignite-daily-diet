import styled, {css} from 'styled-components/native';


export const Container = styled.View`
  align-items: center;
  background-color: ${({theme})=>theme.COLORS.base_gray_700};
  width: 100%;
  flex-grow:1;
  height: 100%;
 
  
`;

export const ContentContainer = styled.View`
 background-color: ${({theme})=>theme.COLORS.base_gray_700};
  width: 100%;
  align-items: flex-start;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transform: translateY(-15px);
  flex:1;
  padding: 30px;
  
`

export const MealTitle = styled.Text`
  ${({theme})=>css`
    color: ${theme.COLORS.base_gray_100};
    font-size: ${theme.FONT_SIZE.BL}px;
    font-family: ${theme.FONT_FAMILY.NunitoBold700};
    height: 26px;
    text-align: right;
    margin-bottom: 8px;

  `}
`

export const MealDescription =  styled.Text`
   ${({theme})=>css`
    color: ${theme.COLORS.base_gray_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.NunitoRegular400};
    height: 21px;

  `}
`

export const DateTimeLabel = styled.Text`
  ${({theme})=>css`
    color: ${theme.COLORS.base_gray_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.NunitoBold700};
    height: 18px;
    /* margin-bottom: 10px;
    margin-top: 20px; */
    margin: 20px 0px 8px 0px;

  `}
`

export const DateTimeDescription = styled.Text`
  ${({theme})=>css`
    color: ${theme.COLORS.base_gray_200};
    font-size: ${theme.FONT_SIZE.BMD}px;
    font-family: ${theme.FONT_FAMILY.NunitoRegular400};
    height: 21px;
    margin-bottom: 20px;
 
  `}
`


export const LabelContainer = styled.View`
  width: 127px;
  padding: 8px 16px;
  background-color: ${({theme})=>theme.COLORS.base_gray_600};
  height: 34px;
  border-radius: 1000px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const LabelText = styled.Text`
font-size: ${({theme})=>theme.FONT_SIZE.SM}px;
font-family: ${({theme})=>theme.FONT_FAMILY.NunitoRegular400};

`

export const BottomContainer = styled.View`
  background-color: ${({theme})=>theme.COLORS.base_gray_700}; 
  gap: 10px;
  padding: 30px;


`