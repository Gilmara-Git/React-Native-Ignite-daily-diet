import { Container, Time, MealName, IndicatorDot,Separator } from './styles';
import { useTheme } from 'styled-components/native';

type SectionListItem ={
    time: string;
    mealName : string; 
    widthDimensions: number;
    indicatorColor: boolean;
}


export const SectionListItem = ({ widthDimensions, time, mealName, indicatorColor }:SectionListItem)=>{
    const theme = useTheme()
;    return (
        <Container widthDimensions={widthDimensions}>
            <Time>{time}</Time>
            <Separator />
            <MealName>{mealName}</MealName>
            <IndicatorDot indicatorColor={indicatorColor ? theme.COLORS.brand_green_mid: theme.COLORS.brand_red_mid}/>
        </Container>
    )
};

