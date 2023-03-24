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
    subtitle,
    top,
    onClick }: ColoredHeaderProps)=>{

    return (
    <StatsHeaderBox 
        height={height}
        backgroundColor={backgroundColor}  
        subtitle={subtitle ? subtitle : ''}  
        >
        <BackArrowButton
            left={left}
            top={top}
            activeOpacity={0.5}
            onPress={onClick}
            subtitle={subtitle ? subtitle : ''} 
        >
            <BackArrow fill={arrowColor}/>
        </BackArrowButton>

        <Title fontSize={fontSize}>
            {title}
        </Title>
            
            { subtitle && 
        
            <Subtitle>
                {subtitle}
            </Subtitle>
            
            }
    </StatsHeaderBox>)
}