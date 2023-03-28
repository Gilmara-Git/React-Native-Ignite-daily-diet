import { NewButton, PlusIcon, ButtonTitle } from './styles';
import { TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

type NewMealButtonProps = TouchableOpacityProps &{
    icon?: keyof typeof AntDesign.glyphMap;
    iconColor?: string;
    backgroundColor: string;
    title: string;
    titleColor: string;
    border?: string;
    height: number;
    width: number;
   
};

export const MainButton =({ 
    icon,
    iconColor,
    backgroundColor, 
    title, 
    titleColor, 
    border,
    height,
    width,   
    ...rest}:NewMealButtonProps)=>{

   
    return (
        <NewButton
            backgroundColor={backgroundColor}
            height={height}
            width={width}      
            activeOpacity={0.7}
        {...rest }

        >
            { icon && 
            <PlusIcon 
                name={icon}
                iconColor={iconColor}
                />
            
            }
            <ButtonTitle titleColor={titleColor}>
                {title}
            </ButtonTitle>
        </NewButton>
    )
};