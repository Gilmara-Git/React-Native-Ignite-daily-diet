import { Container, Time, MealName, IndicatorDot,Separator } from './styles';

type SectionListItem ={
    time: string;
    mealName : string; 
    widthDimensions: number;
    indicatorColor: string;
}


export const SectionListItem = ({ widthDimensions, time, mealName, indicatorColor }:SectionListItem)=>{

    return (
        <Container widthDimensions={widthDimensions}>
            <Time>{time}</Time>
            <Separator />
            <MealName>{mealName}</MealName>
            <IndicatorDot indicatorColor={indicatorColor}/>
        </Container>
    )
};

