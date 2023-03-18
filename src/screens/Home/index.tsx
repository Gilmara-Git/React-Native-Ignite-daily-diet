import {
  Container,
  MealsTitleContainer,
  Title,
  MealsDetailContainer,
} from "./styles";
import { useState } from "react";
import { Header } from "@components/Header";
import { NewMealButton } from "@components/NewMealButton";
import { StatisticBox } from "@components/StatisticBox";
import { SectionListItem } from "@components/SectionListComponents/SectionListItem";
import { SectionListHeader } from "@components/SectionListComponents/SectionListHeader";
import { useTheme } from "styled-components/native";
import { useWindowDimensions, SectionList } from "react-native";
import { DATA } from "@utils/mealsData";

export const Home = () => {
  const [percentage, setPercentage] = useState(90.86);
  const { width } = useWindowDimensions();
  const theme = useTheme();

  const handleNewReceipt = () => {
    console.log("Creating new Meal");
  };

  return (
    <Container>
      <Header />
      <StatisticBox
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
        <NewMealButton icon="plus" onPress={handleNewReceipt} />
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
