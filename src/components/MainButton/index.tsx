import { Container, ButtonIcon, ButtonTitle } from './styles';
import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons'

type NewMealButtonProps = TouchableOpacityProps &{
    icon?: keyof typeof Feather.glyphMap;
    iconColor?: string;
    backgroundColor: string;
    title: string;
    titleColor: string;
    height: number;
    width: number;
    borderWidth?: number;
    borderColor?: string;

};


export const MainButton =({ 
    icon,
    iconColor,
    backgroundColor, 
    title, 
    titleColor, 
    height,
    width, 
    borderWidth,
    borderColor,  
    ...rest}:NewMealButtonProps)=>{
       
   
    return (
        <Container
            activeOpacity={0.7}
            width={width}      
            backgroundColor={backgroundColor}
            height={height}
            borderColor={borderColor}              
            borderWidth={borderWidth ? borderWidth : 0}
            {...rest }

        >
            { icon && 
            <ButtonIcon 
                name={icon}
                iconColor={iconColor}
                />
            
            }
            <ButtonTitle titleColor={titleColor}>
                {title}
            </ButtonTitle>
        </Container>
    )
};