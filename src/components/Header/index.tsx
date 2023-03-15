import { Container, Image, AvatarWrapper, Avatar } from './styles';
import  Logo from '@assets/logo.png';
import { useWindowDimensions } from 'react-native';
import  * as ImagePicker from 'expo-image-picker';



export const Header =()=>{
    const {width} = useWindowDimensions(); 

    return(
        <Container dimensions={width}>
            <Image source={Logo}/>
            <AvatarWrapper>
                <Avatar 
                 source={{uri:"https://avatars.githubusercontent.com/u/66445234?v=4"}}/>
            </AvatarWrapper>
        </Container>
    )
}