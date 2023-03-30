import { useState } from "react";
import {
  Container,
  InnerContainer,
  Form,
  Label,
  FieldWrapper,
  FieldHolder,
  BottomContainer
} from "./styles";
import { ColoredHeader } from "@components/ColoredHeader";
import { MainButton } from "@components/MainButton";
import { AmPmButton } from "@components/AmPmButton";
import { FormButton } from "@components/FormButton";
import { FormInput } from "@components/FormInput";
import { useTheme } from "styled-components/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParamList } from "@routes/routesTypes";
import {
  useWindowDimensions, 
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";

type NewMealNavigationProps = {
  navigation: NativeStackNavigationProp<RoutesParamList, "edit_meal">;
};

export const EditMeal = ({ navigation }: NewMealNavigationProps) => {
  const [isAmPm, setIsAmPm] = useState("Am");
  const [description, setDescription] = useState("");
  const [mealName, setMealName] = useState("");
  const [ activeButtonContent, setActiveButtonContent ] = useState("");

  const theme = useTheme();
  const { width } = useWindowDimensions();

  const handleReturnHome = () => {
    navigation.navigate('home');
  };

  const handleDescription = (value: string) => {
    setDescription(value);
  };

  const handleAmPm = (value: string) => {
    setIsAmPm(value);
  };

  const handleActiveButton =( value: string)=>{
    setActiveButtonContent(value);
  };
  
  const handledEditMeal = ()=>{
    if(!activeButtonContent){
     return Alert.alert('Meal within your diet?', 'Please check Yes or No.')
    }
    // get all the data, mount the object and save it on the AsyncStorage
    // take client back to the home screen
    navigation.navigate("home");
  } 


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
    >
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <ColoredHeader
            height={132}
            backgroundColor={theme.COLORS.base_gray_500}
            fontSize={theme.FONT_SIZE.MD}
            arrowColor={theme.COLORS.base_gray_200}
            title="Edit Meal"
            left={32}
            onClick={handleReturnHome}
            top={56}
          />
        
          <InnerContainer>
            <Form width={width > 750 ? 650 : 327}>
              <FieldHolder>
                <Label>Meal Name</Label>
                <FieldWrapper direction="row" justify="center">
                  <FormInput
                    width={width > 750 ? 650 : 327}
                    height={48}
                    placeholder="Meal name"
                  />
                </FieldWrapper>
              </FieldHolder>

              <FieldHolder>
                <Label>Description</Label>
                <FieldWrapper direction="row" justify="center">
                  <FormInput
                    width={width > 750 ? 650 : 327}
                    height={description ? 120 : 48}
                    placeholder="Describe your meal"
                    editable
                    multiline
                    textAlignVertical="top"
                    numberOfLines={2}
                    autoCorrect={false}
                    value={description}
                    onChangeText={handleDescription}
                  />
                </FieldWrapper>
              </FieldHolder>

              <FieldWrapper direction="row" justify="space-between">
                <FieldHolder>
                  <Label>Date</Label>
                  <FormInput
                    width={width > 750 ? 315 : 153}
                    height={48}
                    placeholder="00/00/00"
                  />
                </FieldHolder>

                <FieldHolder>
                  <Label>Hour</Label>
                  <FieldWrapper direction="row" justify="space-between" gap={4}>
                    <FormInput
                      width={width > 750 ? 250 : 110}
                      height={48}
                      placeholder="08:01"
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
                        onPress={handleAmPm.bind(this, "Am")}
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
                        onPress={handleAmPm.bind(this, "Pm")}
                      />
                    </FieldHolder>
                  </FieldWrapper>
                </FieldHolder>
              </FieldWrapper>
              <FieldWrapper direction="row" justify="space-between">
                <FieldHolder>
                  <Label>Is this meal within your Diet ?</Label>
                  <FieldWrapper direction="row" justify="space-between" gap={8}>
                        <FormButton 
                          width={width > 750 ? 315 : 160}
                          backgroundColor={activeButtonContent === "Yes" ? theme.COLORS.brand_green_light : theme.COLORS.base_gray_600}
                          title="Yes"
                          dotColor={theme.COLORS.brand_green_dark}
                          border={activeButtonContent === "Yes" ? 1 : 0 }
                          borderColor={activeButtonContent === "Yes" ? theme.COLORS.brand_green_dark: ''}
                          onPress={()=>handleActiveButton("Yes")}
                          />

                        <FormButton 
                          width={width > 750 ? 315 : 160}
                          backgroundColor={activeButtonContent === "No" ? theme.COLORS.brand_red_light : theme.COLORS.base_gray_600}
                          title="No"
                          dotColor={theme.COLORS.brand_red_dark}
                          border={activeButtonContent === "No" ? 1 : 0 }
                          borderColor={activeButtonContent === "No" ? theme.COLORS.brand_red_dark: theme.COLORS.base_gray_600}
                          onPress={()=>handleActiveButton("No")}
                          />
                  </FieldWrapper>
                </FieldHolder>
              </FieldWrapper>

            </Form>
          </InnerContainer>
        
            <BottomContainer>
              <MainButton
                backgroundColor={theme.COLORS.base_gray_200}
                title="Save changes"
                titleColor={theme.COLORS.base_white}
                height={50}
                width={width > 750 ? 650 : 327}
                onPress={handledEditMeal}
              />
          </BottomContainer>
        </Container>
        </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
   
  );
};
