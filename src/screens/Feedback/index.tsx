import { Container, Title, Description , BoldDescription} from './styles';
import { MainButton } from '@components/MainButton';
import { useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from "@routes/routesTypes";
import { useState , useEffect } from 'react';
import { useTheme } from 'styled-components/native';
import WithinDietImage from '@assets/illustration_withinDiet.svg';
import OutsideDietImage from '@assets/illustration_outsideDiet.svg';
import { Text } from 'react-native';

type FeedbackParams = {   
    activeButtonContent: string;
    
}

type FeedbackNavigationProps = {
    navigation: NativeStackNavigationProp<RoutesParamList, 'feedback'>
}

export const Feedback = ({navigation }:FeedbackNavigationProps)=>{
    const [title, setTitle] = useState("");
    const [ description, setDescription ] = useState("");
    const [ boldDescription, setBoldDescription ] = useState("");
    const theme = useTheme();
    const  { params } = useRoute();
    const {activeButtonContent } = params as FeedbackParams;



    const handleBackHome = ()=>{
        navigation.navigate("home")
    }

    useEffect(()=>{
        if(activeButtonContent === 'Yes'){
            setTitle('Keep it up!');
            setDescription('You are  Pretty good!');
            setBoldDescription('keeping your diet.')
        }else{
            setTitle('Maybe next time!');
            setDescription('You this time, but do not give up!');
            setBoldDescription('got outside of your diet.')
        }

    }, [])
    return (
        <Container>
            <Title textColor={activeButtonContent === 'Yes' ? theme.COLORS.brand_green_dark :theme.COLORS.brand_red_dark}>{title}</Title>
            <Description textColor={theme.COLORS.base_gray_200}>
                {description}
                <BoldDescription>{boldDescription}</BoldDescription>
                </Description>
            { activeButtonContent === 'Yes' ? 
                <WithinDietImage style={{marginBottom: 30}}/>
                :
                <OutsideDietImage style={{marginBottom: 30}}/>
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