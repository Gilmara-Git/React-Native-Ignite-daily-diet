import { Container, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

type AmPmProps = TouchableOpacityProps & {
    color: string;
    title: string;
    fSize: number;
    fFamily: string;
    onClick: ()=>void;
}

export const  AmPmButton = ({ color, title, fSize, fFamily, onClick }: AmPmProps)=> {
    return (
    <Container onPress={onClick}>
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