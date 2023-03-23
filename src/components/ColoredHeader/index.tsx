import { StatsHeaderBox, Title, Subtitle, BackArrowButton, ColoredHeaderStyledProps } from './styles';
import BackArrow from '@assets/back.svg';
type ColoredHeaderProps = ColoredHeaderStyledProps &{
    title: string;
    subtitle?: string;
    arrowColor: string;
    onClick: ()=>void;

}

export const ColoredHeader = ({ 
    height, 
    backgroundColor, 
    title, 
    fontSize, 
    arrowColor, 
    left, 
    onClick }: ColoredHeaderProps)=>{
    return (
    <StatsHeaderBox 
        height={height}
        backgroundColor={backgroundColor}    
        >
        <BackArrowButton
            left={left}
            activeOpacity={0.5}
            onPress={onClick}
        >
            <BackArrow fill={arrowColor}/>
        </BackArrowButton>

        <Title fontSize={fontSize}>
            {title}
        </Title>

    </StatsHeaderBox>)
}