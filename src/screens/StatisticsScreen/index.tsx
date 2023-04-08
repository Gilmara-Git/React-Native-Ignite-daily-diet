import { useWindowDimensions, TouchableOpacityProps } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { RoutesParamList } from "@routes/routesTypes";
import { ColoredHeader } from "@components/ColoredHeader";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getAllMeals } from '@storage/meals/getAllMeals';
import { useCallback, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import {
  Container,
  General,
  GeneralText,
  RectangleBox,
  NumericInfo,
  TextInfo,
  SquaredBoxesContainer,
  SquaredBox,
} from "./styles";


type StatisticsScreenProps =  {
  color: string;
  title: string;
  subtitle: string;
  arrowColor: string;
  percentage: number;
};

type StatisticsNavigationProps = TouchableOpacityProps &{
  navigation: NativeStackNavigationProp<RoutesParamList, "statistics">;
};

export const StatisticsScreen = ({ navigation, ...rest }: StatisticsNavigationProps) => {
  const [ totalMeals, setTotalMeals ] = useState('');
  const [ mealsWithinDiet, setMealsWithinDiet ] = useState('');
  const [ mealsOutsideDiet, setMealsOutsideDiet ] = useState('');
  const [ bestMealsSequenceInDiet , setBestMealsSequenceInDiet ] = useState('');
  
 const { width } = useWindowDimensions();
  const { params } = useRoute();
  const theme = useTheme();
  const { color, subtitle, title, arrowColor } =
    params as StatisticsScreenProps;

  const handleBackHome = () => {
    navigation.goBack();
  };

  const fetchAllMeals = async()=>{
    const storedMeals = await getAllMeals();
    setTotalMeals(String(storedMeals.length));

    const QtyMealwithinDiet = storedMeals.filter(meal=> {
      if(meal.withinDiet === true){    
        return meal;
      }
    });
    setMealsWithinDiet(String(QtyMealwithinDiet.length));

    const QtyMealOutsideDiet = storedMeals.filter(meal=> {
      if(meal.withinDiet === false){    
        return meal;
      }
    });
    setMealsOutsideDiet(String(QtyMealOutsideDiet.length));
    
    getBestMealsSequenceInDiet(storedMeals);
  }

    
  const getBestMealsSequenceInDiet = (meals: MealStorageDTO[] )=>{
  
    type CountType = {
      max: number;
    }
    let maxCount: CountType = { max: 0};
    let initialCount = 0;

      meals.forEach(meal =>{
        if(meal.withinDiet === true){
          maxCount['max'] =  initialCount;
          initialCount++;
        }else if(meal.withinDiet === false){
          if(initialCount > maxCount['max']){
            maxCount['max'] =  initialCount;
          }
          initialCount = 0;
          setBestMealsSequenceInDiet(String(maxCount['max']));
        }
      })
    };




  useFocusEffect(useCallback(()=>{
    fetchAllMeals();
  }, []))

  return (
    <Container style={{ width: width > 750 ? width : 375 }}>
      <ColoredHeader
        height={200}
        backgroundColor={color}
        fontSize={theme.FONT_SIZE.XL}
        arrowColor={arrowColor}
        title={title}
        subtitle={subtitle}
        left={32}
        onClick={handleBackHome}
        top={56}
      />

      <General style={{ width: width > 750 ? width : 375 }}>
        <GeneralText>General Statistics</GeneralText>
        <RectangleBox        
        >
          <NumericInfo>{bestMealsSequenceInDiet}</NumericInfo>
          <TextInfo>better sequence of meals within your diet</TextInfo>
        </RectangleBox>

        <RectangleBox          
        >
          <NumericInfo>{totalMeals}</NumericInfo>
          <TextInfo>registered meals</TextInfo>
        </RectangleBox>

        <SquaredBoxesContainer>
          <SquaredBox          
            style={{ backgroundColor: "#E5F0DB" }}>
            <NumericInfo>{mealsWithinDiet}</NumericInfo>
            <TextInfo>meals within your diet</TextInfo>
          </SquaredBox>

          <SquaredBox            
           style={{ backgroundColor: "#F4E6E7" }}>
            <NumericInfo>{mealsOutsideDiet}</NumericInfo>
            <TextInfo>meals outside your diet</TextInfo>
          </SquaredBox>
        </SquaredBoxesContainer>
      </General>
     
    </Container>
  );
};
