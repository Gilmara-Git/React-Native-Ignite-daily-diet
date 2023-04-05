import {
  Container,
  MealsTitleContainer,
  Title,
  MealsDetailContainer,
} from "./styles";
import { useState , useEffect } from "react";
import { Header } from "@components/Header";
import { MainButton } from "@components/MainButton";
import { StatisticBox } from "@components/HomeScreenComponents/StatisticBox";
import { SectionListItem } from "@components/SectionListComponents/SectionListItem";
import { SectionListHeader } from "@components/SectionListComponents/SectionListHeader";
import { useTheme } from "styled-components/native";
import { useWindowDimensions, SectionList } from "react-native";
import { DATA } from "@utils/mealsData";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from "@routes/routesTypes";
import { getMeals } from '@storage/meals/getMeals';

type HomeNavigationProps  = {
  navigation: NativeStackNavigationProp<RoutesParamList, 'home'>
}

type MealsList ={
  date: string;
  data: Array<{
    name: string;
    time: string;
    description: string;
    withinDiet: string;  
    id: string;
  }>
}[]

export const Home = ({navigation} : HomeNavigationProps) => {

 
  const [percentage, setPercentage] = useState(90.86);
  const [ mealsList, setMealsList ] = useState();
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const description =  'of meals within diet plan';
  // console.log(mealsList, 'sou a mealsList')


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
   const meals = await getMeals();
  //  console.log(meals, 'linha6222222')

    // if(meals){
    //   setMealsList(meals)
    // }
    // setMealsList(meals)
  }

  useEffect(()=>{
    getUpdatedMeals();
  }, []);

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
          sections={DATA}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <SectionListItem
              widthDimensions={width}
              time={item.time}
              mealName={item.name}
              indicatorColor={item.colorIndicator}
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
