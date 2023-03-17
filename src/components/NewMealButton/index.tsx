import { NewButton, PlusIcon, ButtonTitle } from './styles';
import { TouchableOpacityProps } from 'react-native';

type NewMealButtonProps = TouchableOpacityProps;

export const NewMealButton =({ ...rest}:NewMealButtonProps)=>{
    return (
        <NewButton
        {...rest }
        >
            <PlusIcon/>
            <ButtonTitle>
                New meal
            </ButtonTitle>
        </NewButton>
    )
};