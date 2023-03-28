import { useState, useEffect } from "react";
import {
  Container,
  InnerContainer,
  Form,
  Label,
  Input,
  FieldWrapper,
  FieldHolder
} from "./styles";
import { ColoredHeader } from "@components/ColoredHeader";
import { MainButton } from "@components/MainButton";
import { AmPmButton } from "@components/AmPmButton";
import { FormButton } from "@components/FormButton";
import { useTheme } from "styled-components/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParamList } from "@routes/routesTypes";
import {
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform, 
  TextInputProps
 } from "react-native";
type NewMealNavigationProps = {
  navigation: NativeStackNavigationProp<RoutesParamList, "new_meal">;
};

export const NewMeal = ({ navigation }: NewMealNavigationProps) => {
  const [isAmPm, setIsAmPm] = useState("Am");
  const [description, setDescription] = useState("");
  const [ mealName, setMealName ] = useState("");
  const theme = useTheme();
  const { width, height } = useWindowDimensions();
  console.log(height, 'linha36')

  const handleReturnHome = () => {
    navigation.navigate("home");
  };

  const handleDescription = (value: string) => {
    setDescription(value);
  };

  const handleAmPm = (value: string) => {
    setIsAmPm(value);
  };

  return (
    <Container>
      <ColoredHeader
        height={132}
        backgroundColor={theme.COLORS.base_gray_500}
        fontSize={theme.FONT_SIZE.MD}
        arrowColor={theme.COLORS.base_gray_200}
        title="New Meal"
        left={32}
        onClick={handleReturnHome}
        top={56}
      />
      <InnerContainer>
        <Form width={width > 750 ? 650 : 327}>
          <FieldHolder>
              <Label>Meal Name</Label>
              <FieldWrapper direction="row" justify="center">
                <Input width={width > 750 ? 650 : 327} height={48}
                  placeholder="Meal name"
                  placeholderTextColor={theme.COLORS.base_gray_400}
                />
            </FieldWrapper>
        </FieldHolder>

        <FieldHolder>
            <Label>Description</Label>
            <FieldWrapper direction="row" justify="center">
              <Input
                editable
                multiline
                textAlignVertical="top"
                numberOfLines={5}
                autoCorrect={false}
                width={width > 750 ? 650 : 327}
                height={description ? 120 : 48}
                value={description}
                placeholder="Describe your meal"
                placeholderTextColor={theme.COLORS.base_gray_400}
                onChangeText={handleDescription}
                />
            </FieldWrapper>
        </FieldHolder>

          <FieldWrapper direction="row" justify="space-between">
            <FieldHolder>
              <Label>Date</Label>
              <Input
                keyboardType="numeric"
                width={width > 750 ? 315 : 153}
                height={48}
                placeholder="00/00/00"
                placeholderTextColor={theme.COLORS.base_gray_400}
              />
            </FieldHolder>

            <FieldHolder>
              <Label>Hour</Label>
              <FieldWrapper direction="row" justify="space-between">
                    <Input width={width > 750 ? 250 : 110} height={48}
                       placeholder="08:01"
                       placeholderTextColor={theme.COLORS.base_gray_400}
                    />

                    <FieldHolder>
                      <AmPmButton
                        fSize={14}
                        fFamily={theme.FONT_FAMILY.NunitoBold700}
                        color={
                          isAmPm === "Am"
                            ? theme.COLORS.base_gray_100
                            : theme.COLORS.base_gray_400
                        }
                        title="Am"
                        onClick={handleAmPm.bind(this, "Am")}
                      />

                      <AmPmButton
                        fSize={14}
                        fFamily={theme.FONT_FAMILY.NunitoBold700}
                        color={
                          isAmPm === "Pm"
                            ? theme.COLORS.base_gray_100
                            : theme.COLORS.base_gray_400
                        }
                        title="Pm"
                        onClick={handleAmPm.bind(this, "Pm")}
                      />
                    </FieldHolder>
              </FieldWrapper>
            </FieldHolder>

       
          </FieldWrapper>
             <FieldWrapper direction="row" justify="space-between">
            <FieldHolder style={{marginBottom: height > 1000 ? 380 : 65}} >
                <Label>Is this meal within your Diet ?</Label>
                  <FieldWrapper direction="row" justify="space-between">
                    <FormButton 
                          width={width > 750 ? 315 : 160} 
                          backgroundColor={theme.COLORS.base_gray_600} 
                          title="Yes" 
                          dotColor={theme.COLORS.brand_green_dark}
                          // border={this will be conditional}
                          // borderColor={this will be conditional}
                          />
                      <FormButton 
                          width={width > 750 ? 315 : 160} 
                          backgroundColor={theme.COLORS.base_gray_600} 
                          title="No" 
                          dotColor={theme.COLORS.brand_red_dark}
                           // border={this will be conditional}
                          // borderColor={this will be conditional}
                      />

                  </FieldWrapper>
                </FieldHolder>
              
              </FieldWrapper>           

        

        </Form>

        <MainButton          
          backgroundColor={theme.COLORS.base_gray_200}
          title="Create Meal"
          titleColor={theme.COLORS.base_white}
          height={50}
          width={width > 750 ? 650 : 327}
        />
      </InnerContainer>
    </Container>
  );
};
