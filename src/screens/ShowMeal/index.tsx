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
import {  useWindowDimensions, Alert } from "react-native";
import { useCallback } from 'react';
import { useFocusEffect } from "@react-navigation/native";
import { getMealById } from '@storage/meals/getMealById';
import { useState } from 'react';


type ShowMealNavigationProps = {
  navigation: NativeStackNavigationProp<RoutesParamList, "show_meal">;
};

type ShowMealType = {
  percentage: number;
  id:string;
}
export const ShowMeal = ({ navigation }: ShowMealNavigationProps) => {
  const [ mealName, setMealName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ dateTime, setDateTime ] = useState('');
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const { params }  = useRoute();
  const { percentage , id} = params as ShowMealType;


  

  const handleReturnHome = () => {
    navigation.navigate('home');
  };
  const handleEditMeal = ()=>{
    navigation.navigate('edit_meal', { 
      percentage, 
      id 
      
    });
  };

  const handleDeleteMeal = ()=>{
    Alert.alert("Delete Meal ?", "Do you want to remove this meal", [
      { text: 'Cancel', style: "cancel"},
      { text: 'Remove', style: "destructive", onPress:()=>deleteUpdateMeal()}, 
    ])
  };
  
  const deleteUpdateMeal = ()=>{
    console.log('I was called')
  };

  const fetchMeal = async()=>{
  const meal =  await getMealById(id);
  setMealName(meal[0].mealName);
  setDescription(meal[0].description);
  setDateTime(meal[0].date + '   ' + meal[0].time)

  }
 
  useFocusEffect(useCallback(()=>{
    fetchMeal();
  }, []));

  return (
 
        <Container>
          <ColoredHeader
            height={132}
            backgroundColor={percentage > 50 ? theme.COLORS.brand_green_light : theme.COLORS.brand_red_light}
            fontSize={theme.FONT_SIZE.MD}
            arrowColor={theme.COLORS.base_gray_200}
            title="Meal"
            left={32}
            onClick={handleReturnHome}
            top={56}
          />
        
          <ContentContainer>
            
              <MealTitle>{mealName}</MealTitle>
              <MealDescription>{description}</MealDescription>
              <DateTimeLabel>Date and time</DateTimeLabel>
              <DateTimeDescription>{dateTime}</DateTimeDescription>
              
              <LabelContainer>
                <Dot fill={percentage > 50 ? theme.COLORS.brand_green_dark : theme.COLORS.brand_red_dark}/>
                <LabelText>
                  { percentage > 50  ? 'Within Diet' : 'Outside Diet' }
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
