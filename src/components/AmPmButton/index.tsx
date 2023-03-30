import { Container, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

type AmPmProps = TouchableOpacityProps & {
    color: string;
    title: string;
    fSize: number;
    fFamily: string;
  
}

export const  AmPmButton = ({ color, title, fSize, fFamily, ...rest }: AmPmProps)=> {
    return (
    <Container
        {...rest}
    >
        <Title 
            color={color}
            fSize={fSize}
            fFamily={fFamily}    
            >
            {title}
        </Title>
    </Container>
    )
}