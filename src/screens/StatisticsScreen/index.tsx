import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import { RoutesParamList } from '@routes/routesTypes';
import BackArrow from '@assets/back.svg';
import { useWindowDimensions } from 'react-native';
import { 
    Container, 
    StatsHeaderBox, 
    BackArrowButton, 
    HeaderPercentage , 
    HeaderDescription, 
    General,
    GeneralText,
    RectangleBox,
    NumericInfo,
    TextInfo,
    SquaredBoxesContainer,
    SquaredBox
} from './styles';

type StatisticsScreenProps = {
    color: string;
    title: string;
    description: string;
 
 
}

type StatisticsNavigationProps = {
    navigation: NativeStackNavigationProp<RoutesParamList, 'statistics'>
}

export const StatisticsScreen = ({ navigation }:StatisticsNavigationProps)=>{
    const { width }  = useWindowDimensions();
    const { params }  = useRoute();
    const { color, description , title } =  params as StatisticsScreenProps;

    
    const handleBack = ()=>{
        console.log('I am the handle back button')
    };
    
    return (
        <Container style={{width: width > 750 ? width : 375}}>
            <StatsHeaderBox >
                <BackArrowButton  
                    activeOpacity={0.5}
                    onPress={handleBack}
                    >
                    <BackArrow fill={color}/>
                </BackArrowButton>
                <HeaderPercentage>{title}</HeaderPercentage>
                <HeaderDescription>{description}</HeaderDescription>

            </StatsHeaderBox>

            <General style={{width: width > 750 ? width : 375}}>
                <GeneralText>General Statistics</GeneralText>
                <RectangleBox>
                    <NumericInfo>22</NumericInfo>
                    <TextInfo>better sequence of meals within your diet</TextInfo>
                </RectangleBox>

                <RectangleBox>
                    <NumericInfo>109</NumericInfo>
                    <TextInfo>registered meals</TextInfo>
                </RectangleBox>

                <SquaredBoxesContainer>
                    <SquaredBox style={{backgroundColor: "#E5F0DB"}}>
                        <NumericInfo>99</NumericInfo>
                        <TextInfo>meals within your diet</TextInfo>
                    </SquaredBox>

                    <SquaredBox style={{backgroundColor: "#F4E6E7"}}>
                        <NumericInfo>10</NumericInfo>
                        <TextInfo>meals outside your diet</TextInfo>
                    </SquaredBox>
                </SquaredBoxesContainer>
            </General>
        </Container>
    )

};