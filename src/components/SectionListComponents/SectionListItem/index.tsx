import { Container, Time, MealName, IndicatorDot,Separator } from './styles';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

type SectionListItem = TouchableOpacityProps &{
    time: string;
    mealName : string; 
    widthDimensions: number;
    indicatorColor: boolean;
}


export const SectionListItem = ({ widthDimensions, time, mealName, indicatorColor, ...rest }:SectionListItem)=>{
    const theme = useTheme()
;    return (
        <Container 
            widthDimensions={widthDimensions}
            {...rest}
            >
            <Time>{time}</Time>
            <Separator />
            <MealName>{mealName}</MealName>
            <IndicatorDot indicatorColor={indicatorColor ? theme.COLORS.brand_green_mid: theme.COLORS.brand_red_mid}/>
        </Container>
    )
};

