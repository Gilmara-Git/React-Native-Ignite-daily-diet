import {
  Container,
  ContentContainer,
  BottomContainer,
  MealTitle,
  MealDescription,
  DateTimeLabel,
  DateTimeDescription,
  LabelContainer,
  LabelText,
  ButtonsRow,
} from "./styles";
import { ColoredHeader } from "@components/ColoredHeader";
import { MainButton } from "@components/MainButton";
import { Modal } from "@components/Modal";
import Dot from "@assets/dot.svg";
import { useTheme } from "styled-components/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParamList } from "@routes/routesTypes";
import { useRoute } from "@react-navigation/native";
import { useWindowDimensions, Alert } from "react-native";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getMealById } from "@storage/meals/getMealById";
import { deleteMeal } from "@storage/meals/deleteMeal";
import { useState } from "react";

type ShowMealNavigationProps = {
  navigation: NativeStackNavigationProp<RoutesParamList, "show_meal">;
};

type ShowMealType = { 
  id: string;
  withinDiet: boolean;
};
export const ShowMeal = ({ navigation }: ShowMealNavigationProps) => {
  const [mealName, setMealName] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [showModal, setShowModal] = useState<boolean>();
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const { params } = useRoute();
  const { id, withinDiet } = params as ShowMealType;

 

  const handleReturnHome = () => {
    navigation.navigate("home");
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleEditMeal = () => {
    navigation.navigate("edit_meal", {
      id,
      withinDiet
    });
  };

  const initiateDeleteMeal = () => {
    setShowModal(true);
  };

  const handleDeleteMeal = () => {
    deleteUpdateMeals(id);
  };

  const deleteUpdateMeals = async (id: string) => {
    await deleteMeal(id);
    navigation.navigate("home");
  };

  const fetchMeal = async () => {
    const meal = await getMealById(id);
    setMealName(meal[0].mealName);
    setDescription(meal[0].description);
    setDateTime(meal[0].date + "   " + meal[0].time);
  };

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  return (
    <Container>
      <ColoredHeader
        height={132}
        backgroundColor={
          withinDiet
            ? theme.COLORS.brand_green_light
            : theme.COLORS.brand_red_light
        }
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
          <Dot
            fill={
              withinDiet
                ? theme.COLORS.brand_green_dark
                : theme.COLORS.brand_red_dark
            }
          />
          <LabelText>
            {withinDiet ? "Within Diet" : "Outside Diet"}
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
          onPress={initiateDeleteMeal}
        />
      </BottomContainer>

      {showModal && (
        <Modal height={192}
          onCancel={handleCancel}
          title="Do you really want to delete this meal record ?"
        >
          <ButtonsRow>
            <MainButton
              backgroundColor={theme.COLORS.base_gray_700}
              title="Cancel"
              titleColor={theme.COLORS.base_gray_100}
              height={50}
              width={135}
              borderWidth={1}
              borderColor={theme.COLORS.base_gray_200}
              onPress={handleCancel}
            />

            <MainButton
              backgroundColor={theme.COLORS.base_gray_100}
              title="Yes, delete"
              titleColor={theme.COLORS.base_gray_700}
              height={50}
              width={135}
              onPress={handleDeleteMeal}
            />
          </ButtonsRow>
        </Modal>
      )}
    </Container>
  );
};
