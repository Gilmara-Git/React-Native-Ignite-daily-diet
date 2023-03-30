import {
  Container,
  ContentContainer,
  BottomContainer,
  MealTitle,
  MealDescription,
  DateTimeLabel,
  DateTimeDescription,
  LabelContainer,
  LabelText
} from "./styles";
import { ColoredHeader } from "@components/ColoredHeader";
import { MainButton } from "@components/MainButton";
import Dot from '@assets/dot.svg';
import { useTheme } from "styled-components/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParamList } from "@routes/routesTypes";
import { useRoute } from '@react-navigation/native';
import { DietParams } from "@screens/Feedback";
import {  useWindowDimensions, Alert } from "react-native";

type ShowMealNavigationProps = {
  navigation: NativeStackNavigationProp<RoutesParamList, "show_meal">;
};

export const ShowMeal = ({ navigation }: ShowMealNavigationProps) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const { params }  = useRoute();
  const { activeButtonContent } = params as DietParams;
  

  const handleReturnHome = () => {
    navigation.navigate('home');
  };
  const handleEditMeal = ()=>{
    navigation.navigate('edit_meal');
  };

  const handleDeleteMeal = ()=>{
    Alert.alert("Delete Meal ?", "Do you want to remove this meal", [
      { text: 'No', style: "cancel"},
      { text: 'Yes', style: "destructive", onPress:()=>deleteUpdateMeal()}, 
    ])
  };
  
  const deleteUpdateMeal = ()=>{
    console.log('I was called')
  };
  return (
 
        <Container>
          <ColoredHeader
            height={132}
            backgroundColor={activeButtonContent === 'Yes' ? theme.COLORS.brand_green_light : theme.COLORS.brand_red_light}
            fontSize={theme.FONT_SIZE.MD}
            arrowColor={theme.COLORS.base_gray_200}
            title="Meal"
            left={32}
            onClick={handleReturnHome}
            top={56}
          />
        
          <ContentContainer>
            
              <MealTitle>Meal Name which will be dynamic</MealTitle>
              <MealDescription>Meal description </MealDescription>
              <DateTimeLabel>Date and time</DateTimeLabel>
              <DateTimeDescription>03/28/2023 at 07:00 Pm</DateTimeDescription>
              
              <LabelContainer>
                <Dot fill={activeButtonContent === 'Yes'? theme.COLORS.brand_green_dark : theme.COLORS.brand_red_dark}/>
                <LabelText>
                  { activeButtonContent === 'Yes'? 'Within Diet' : 'Outside Diet' }
                </LabelText>
              </LabelContainer>
            
            </ContentContainer>
            <BottomContainer>
              <MainButton
                backgroundColor={theme.COLORS.base_gray_200}
                title="Edit your Meal"
                titleColor={theme.COLORS.base_white}
                height={50}
                width={width > 750 ? 650 : 327}
                icon="edit"
                iconColor={theme.COLORS.base_white}
                onPress={handleEditMeal}
              
            />

              <MainButton
                backgroundColor={theme.COLORS.base_white}
                title="Delete Meal"
                titleColor={theme.COLORS.base_gray_200}
                height={50}
                width={width > 750 ? 650 : 327}
                icon="trash-2"
                iconColor={theme.COLORS.base_gray_200}
                borderWidth={1}
                borderColor={theme.COLORS.base_gray_200}
                onPress={handleDeleteMeal}
              
              />
          </BottomContainer>
        </Container>
      
   
  );
};
