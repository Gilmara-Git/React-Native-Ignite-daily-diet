import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.base_gray_700};
  flex: 1;
`;

export const StatsHeaderBox = styled.View`
  height: 200px;
  background-color: ${({ theme }) => theme.COLORS.brand_green_light};
  align-items: center;
  justify-content: center;
  width: 100%;
`;


export const HeaderPercentage = styled.Text`
  ${({ theme }) => css`
  color: ${theme.COLORS.base_gray_100};
  font-family: ${theme.FONT_FAMILY.NunitoBold700};
  `}
  
  font-size: 32px;
  `;

  export const BackArrowButton = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    top: 45px;
  `;
export const HeaderDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.base_gray_200};
    font-family: ${theme.FONT_FAMILY.NunitoRegular400};
  `}

  font-size: 14px;
`;

export const General = styled.View`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.base_gray_700};
  transform: translateY(-30px);
  flex-grow: 1;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
`;

export const GeneralText = styled.Text`
    ${({theme})=>css`
        font-family: ${theme.FONT_FAMILY.NunitoBold700};
        color:${theme.COLORS.base_gray_100}
    `}
    align-self: center;
    font-size: 14px; 
    margin-top: 30px;
    margin-bottom: 20px;

`;
 
export const RectangleBox =  styled.View`
    width: 327px;
    height: 89px;
    border-radius: 8px;
    padding: 16px;
    background-color: ${({theme})=> theme.COLORS.base_gray_600};
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

export const NumericInfo = styled.Text`
    ${({theme})=> css`
        font-family: ${theme.FONT_FAMILY.NunitoBold700};
        color: ${theme.COLORS.base_gray_100}
    `}  
    font-size: 24px;  
`;

export const TextInfo = styled.Text`
    ${({theme})=> css`
        font-family: ${theme.FONT_FAMILY.NunitoRegular400};
        color: ${theme.COLORS.base_gray_200}
    `} 
    text-align: center;
`;


export const SquaredBoxesContainer = styled.View`
    flex-direction: row;
    width: 327px;
    align-items: center;
    justify-content: space-between;

`

export const SquaredBox = styled.View`
    width: 157px;
    height: 107px;
    border-radius: 8px;
    padding: 16px;
    align-items: center;
    justify-content: center;
`
