import { Container, MealsTitleContainer, Title, MealsDetailContainer } from './styles';
import { useState } from 'react';
import { Header } from '@components/Header';
import { NewMealButton } from '@components/NewMealButton';
import { StatisticBox } from '@components/StatisticBox';
import { useTheme } from 'styled-components/native';
import { useWindowDimensions } from 'react-native';

export const Home =()=>{
    const [ percentage, setPercentage ]  = useState(90.86);
    const { width } = useWindowDimensions();
    const theme = useTheme();

    const handleNewReceipt =()=>{
        console.log('Creating new Meal')
    };

    return (
        <Container>
            <Header/> 
            <StatisticBox 
                percentage={percentage}
                dynamicBackground={percentage > 50 ? theme.COLORS.brand_green_light: theme.COLORS.brand_red_light} 
                widthDimensions={width}
                arrowColor={percentage > 50 ? theme.COLORS.brand_green_dark: theme.COLORS.brand_red_dark}
                /> 
             <MealsTitleContainer style={{width: width > 750 ? 650 : 327}}>
                    <Title>
                        Meals
                    </Title>      

             </MealsTitleContainer>
             <MealsDetailContainer style={{width: width > 750 ? 650 : 327}}>

                <NewMealButton onPress={handleNewReceipt}/>
             </MealsDetailContainer>

               
        </Container>
            
    )
}