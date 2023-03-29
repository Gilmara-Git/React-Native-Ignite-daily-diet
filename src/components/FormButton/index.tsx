import { Container, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';
import Dot from '@assets/dot.svg';

type FormButtonProps = TouchableOpacityProps & {
    width: number;
    backgroundColor: string;
    title: string;
    dotColor: string;
    border?: number;
    borderColor?: string; 
   
}

export const FormButton = ({width, backgroundColor, title, dotColor, border, borderColor , ...rest }: FormButtonProps)=>{

    return (
        <Container 
            activeOpacity={0.5}
            width={width}
            backgroundColor={backgroundColor}
            border={border }
            borderColor={borderColor}
            {...rest}
            >
            <Dot fill={dotColor}/>
            
            <Title>{title}</Title>
        </Container>
    )
}