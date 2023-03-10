import { Container, Image, AvatarWrapper, Avatar } from './styles';
import  Logo from '@assets/logo.png';
import { View, Text } from 'react-native';
import { useWindowDimensions } from 'react-native';


export const Header =()=>{
    const {width} = useWindowDimensions();
    console.log(typeof width, 'linha4')
    // const headerWidth = width - (width * 20/100);
 
    return(
        <Container dimensions={width}>
            <Image source={Logo}/>
            <AvatarWrapper>
                <Avatar source={{uri:"https://avatars.githubusercontent.com/u/66445234?v=4"}}/>
            </AvatarWrapper>
        </Container>
    )
}