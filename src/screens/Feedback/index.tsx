import { Container, Title, Description , BoldDescription} from './styles';
import { MainButton } from '@components/MainButton';
import { useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from "@routes/routesTypes";
import { useState , useEffect } from 'react';
import { useTheme } from 'styled-components/native';
import WithinDietImage from '@assets/illustration_withinDiet.svg';
import OutsideDietImage from '@assets/illustration_outsideDiet.svg';


export type DietParams = {   
    activeButton: boolean;
    
}

type FeedbackNavigationProps = {
    navigation: NativeStackNavigationProp<RoutesParamList, 'feedback'>
}

export const Feedback = ({navigation }:FeedbackNavigationProps)=>{
    const [title, setTitle] = useState("");
    const [ initialDescription, setInitialDescription ] = useState("");
    const [ endDescription, setEndDescription ] = useState("");
    const [ boldDescription, setBoldDescription ] = useState("");
    const theme = useTheme();
    const  { params } = useRoute();
    const {activeButton } = params as DietParams;



    const handleBackHome = ()=>{
        navigation.navigate("home")
    }

    useEffect(()=>{
        if(activeButton){
            setTitle('Keep it up!');
            setInitialDescription('You are ');
            setBoldDescription('keeping your diet. ');
            setEndDescription('Pretty good!');
        }else{
            setTitle('Maybe next time!');
            setInitialDescription('You ');
            setBoldDescription('got outside of your diet ');
            setEndDescription('this time, but do not give up!');
        }

    }, [])
    return (
        <Container>
            <Title textColor={activeButton ? theme.COLORS.brand_green_dark :theme.COLORS.brand_red_dark}>{title}</Title>
            <Description textColor={theme.COLORS.base_gray_200}>
                {initialDescription}
                <BoldDescription>{boldDescription}</BoldDescription>
                {endDescription}
            </Description>

            { activeButton ? 
                <WithinDietImage style={{marginBottom: 40}}/>
                :
                <OutsideDietImage style={{marginBottom: 40}}/>
            }

            <MainButton
                backgroundColor={theme.COLORS.base_gray_200}
                title="Go to home"
                titleColor={theme.COLORS.base_white}
                height={50}
                width={191}
                onPress={handleBackHome}
                 />
        </Container>
    )
};