import {
  Container,
  MealsTitleContainer,
  Title,
  MealsDetailContainer,
} from "./styles";
import { useTheme } from "styled-components/native";

import { useState , useCallback } from "react";
import { useWindowDimensions, SectionList } from "react-native";

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFocusEffect } from "@react-navigation/native";
import { RoutesParamList } from "@routes/routesTypes";

import { Header } from "@components/Header";
import { MainButton } from "@components/MainButton";
import { StatisticBox } from "@components/HomeScreenComponents/StatisticBox";
import { SectionListItem } from "@components/SectionListComponents/SectionListItem";
import { SectionListHeader } from "@components/SectionListComponents/SectionListHeader";

import { getAllMeals } from '@storage/meals/getAllMeals';
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import  groupBy from 'lodash/groupBy';

type HomeNavigationProps  = {
  navigation: NativeStackNavigationProp<RoutesParamList, 'home'>
}

type MealsListProps ={
  date: string;
  data: MealStorageDTO[];
  }


export const Home = ({navigation} : HomeNavigationProps) => {

 
  const [percentage, setPercentage] = useState(40.86);
  const [ mealsList, setMealsList ] = useState<MealsListProps[]>([]);
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const description =  'of meals within diet plan';

  const handleStatisticsNavigation = ()=>{
    navigation.navigate('statistics', {  
      color: Number(`${percentage}`) > 50 ? `${theme.COLORS.brand_green_light}` : `${theme.COLORS.brand_red_light}`,
      subtitle: `${description}`, 
      title: `${percentage}%` ,
      arrowColor: Number(`${percentage}`) > 50 ? `${theme.COLORS.brand_green_dark}` : `${theme.COLORS.brand_red_dark}`,
      percentage: Number(`${percentage}`)
    });
  }

  const handleNewMealNavigation = () => {  
    navigation.navigate("new_meal");
  };

  const getUpdatedMeals = async()=>{

    try{

      setMealsList([]);
      const mealsStored = await getAllMeals();

      const groupList = Object.values(
        groupBy(mealsStored, (mealsList)=>{       
          return mealsList.date;
        })
        
        )
    
        groupList.map(list =>{
          let meal = {
            date: list[0].date,
            data: [...list]
          }

          setMealsList(prevState => [...prevState, meal])
        
        })
  

    }catch(error){
      throw error;
    }
   
  }
  useFocusEffect(useCallback(()=>{
        getUpdatedMeals();
  }, []))

  return (
    <Container>
      <Header />
      <StatisticBox
        onClick = {handleStatisticsNavigation}
        textInfo={description}
        percentage={percentage}
        dynamicBackground={
          percentage > 50
            ? theme.COLORS.brand_green_light
            : theme.COLORS.brand_red_light
        }
        widthDimensions={width}
        arrowColor={
          percentage > 50
            ? theme.COLORS.brand_green_dark
            : theme.COLORS.brand_red_dark
        }
      />
      <MealsTitleContainer style={{ width: width > 750 ? 650 : 327 }}>
        <Title>Meals List</Title>
      </MealsTitleContainer>
      <MealsDetailContainer style={{ width: width > 750 ? 650 : 327 }}>
        <MainButton 
            backgroundColor={theme.COLORS.base_gray_200}
            title='New Meal'
            titleColor={theme.COLORS.base_white}
            height={50}
            width={width > 750 ? 650 : 327}
            icon="plus" onPress={handleNewMealNavigation}
            iconColor={theme.COLORS.base_white} />
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={mealsList}
          keyExtractor={(item, index) => item.mealName + index}
          renderItem={({ item }) => (
            <SectionListItem
              widthDimensions={width}
              time={item.time}
              mealName={item.mealName}
              indicatorColor={item.withinDiet}
            />
          )}
          renderSectionHeader={({ section: { date } }) => (
            <SectionListHeader title={date} />
          )}
        />
      </MealsDetailContainer>
    </Container>
  );
};
