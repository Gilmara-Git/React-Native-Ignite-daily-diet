import { Container, DotContainer, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';
import Dot from '@assets/dot.svg';

type FormButtonProps = TouchableOpacityProps & {
    width: number;
    backgroundColor: string;
    title: string;
    dotColor: string;
    // border?: number;
    // borderColor?: string; 
}

export const FormButton = ({width, backgroundColor, title, dotColor }: FormButtonProps)=>{

    return (
        <Container 
            activeOpacity={0.5}
            width={width}
            backgroundColor={backgroundColor}>
            <Dot fill={dotColor}/>
            
            <Title>{title}</Title>
        </Container>
    )
}