import { Container } from './styles';
import { ColoredHeader } from '@components/ColoredHeader';
import { MainButton } from '@components/MainButton';
import { useTheme } from 'styled-components/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@routes/routesTypes';
import { useWindowDimensions } from "react-native";
type NewMealNavigationProps = {
    navigation: NativeStackNavigationProp<RoutesParamList, 'new_meal'>
}

export const NewMeal =({navigation}: NewMealNavigationProps)=>{
    const theme = useTheme();
    const { width } = useWindowDimensions();
    const handleReturnHome =()=>{
        navigation.navigate('home');
    }

    return (
        <Container>
            <ColoredHeader 
                height={132}
                backgroundColor={theme.COLORS.base_gray_500}
                fontSize={theme.FONT_SIZE.MD}
                arrowColor={theme.COLORS.base_gray_200}
                title="New Meal"
                left={32}
                onClick={handleReturnHome}
                top={56}
            />
             <MainButton  
                backgroundColor={theme.COLORS.base_gray_200}
                title='Create Meal'
                titleColor={theme.COLORS.base_white}
                height={50}
                width={width > 750 ? 650 : 327}
                />
                

        </Container>
    )
}