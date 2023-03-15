import { Container, Image, AvatarWrapper, Avatar } from './styles';
import  Logo from '@assets/logo.png';
import { View, Text } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components/native';


export const Header =()=>{
    const {width} = useWindowDimensions();
    const theme  = useTheme();

    return(
        <Container dimensions={width}>
            <Image source={Logo}/>
            <AvatarWrapper>
                <Avatar 
                    style={{ borderWidth: 2, borderColor: theme.COLORS.base_gray_200}}
                    source={{uri:"https://avatars.githubusercontent.com/u/66445234?v=4"}}/>
            </AvatarWrapper>
        </Container>
    )
}