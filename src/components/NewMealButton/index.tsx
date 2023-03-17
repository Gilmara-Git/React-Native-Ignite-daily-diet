import { NewButton, PlusIcon, ButtonTitle } from './styles';
import { TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

type NewMealButtonProps = TouchableOpacityProps &{
    icon: keyof typeof AntDesign.glyphMap;
};

export const NewMealButton =({ icon, ...rest}:NewMealButtonProps)=>{
    return (
        <NewButton
        {...rest }
        >
            <PlusIcon name={icon}/>
            <ButtonTitle>
                New meal
            </ButtonTitle>
        </NewButton>
    )
};