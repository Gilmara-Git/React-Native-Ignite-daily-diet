import { Container, DotContainer, Title } from './styles';
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

export const FormButton = ({width, backgroundColor, title, dotColor, border, borderColor }: FormButtonProps)=>{
    console.log(borderColor, 'linha15')
    return (
        <Container 
            activeOpacity={0.5}
            width={width}
            backgroundColor={backgroundColor}
            border={border ? border : 0 }
            borderColor={borderColor ? borderColor : ""}
            >
            <Dot fill={dotColor}/>
            
            <Title>{title}</Title>
        </Container>
    )
}