import { Container } from './styles';
import { ColoredHeader } from '@components/ColoredHeader';
import { useTheme } from 'styled-components/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@routes/routesTypes';

type NewMealNavigationProps = {
    navigation: NativeStackNavigationProp<RoutesParamList, 'new_meal'>
}

export const NewMeal =({navigation}: NewMealNavigationProps)=>{
    const theme = useTheme();

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
        </Container>
    )
}