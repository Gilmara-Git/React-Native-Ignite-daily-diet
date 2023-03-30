import styled , { css} from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const Container = styled(SafeAreaView)`
    background-color: ${({theme})=> theme.COLORS.base_white};
    flex: 1; 
    padding: 15px 22px;
    align-items: center;  

`

export const MealsTitleContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 10px;
`

export const Title = styled.Text`
    ${({theme})=> css`
        color: ${theme.COLORS.base_gray_100};
        font-family: ${theme.FONT_FAMILY.NunitoRegular400}

    `}
    font-size: 16px;  
    height: 21px;
     
`;
export const MealsDetailContainer = styled.View`
    align-items: center;
`