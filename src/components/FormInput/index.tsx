import { Container } from './styles';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

type InputProps = TextInputProps &{
    width: number;
    height: number;
    
}

export const FormInput =( {width, height, ...rest}:InputProps)=>{
    const theme = useTheme();
    
    return (
        <Container 
            width={width}
            height={height}           
            borderColor={theme.COLORS.base_gray_500} 
            borderWidth={1}
            placeholderTextColor={theme.COLORS.base_gray_400}
            {...rest}
            />
    )
}