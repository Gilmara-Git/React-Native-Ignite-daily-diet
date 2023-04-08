import { AppError } from '@utils/AppError';
import { useState } from "react";
import uuid from 'react-native-uuid';

import { ColoredHeader } from "@components/ColoredHeader";
import { MainButton } from "@components/MainButton";
import { FormButton } from "@components/FormButton";
import { FormInput } from "@components/FormInput";
import { useTheme } from "styled-components/native";
import { RoutesParamList } from "@routes/routesTypes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Container,
  InnerContainer,
  Form,
  Label,
  FieldWrapper,
  FieldHolder,
  BottomContainer,
} from "./styles";

import {
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import { createMeal } from '@storage/meals/createMeal';
import DateTimePicker , { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import  { getUsDate, getUsTime } from '@utils/dateTimePickerHelper';


type NewMealNavigationProps = {
  navigation: NativeStackNavigationProp<RoutesParamList, "new_meal">;
};

export type DateTimePickerMode = 'date'| 'time';


export const NewMeal = ({ navigation }: NewMealNavigationProps) => {

  const [activeButtonContent, setActiveButtonContent] = useState("");
  const theme = useTheme();
  const { width } = useWindowDimensions();

  const [mealName, setMealName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>(new Date());

  const [time, setTime] = useState("");
  const [dateString, setDateString] = useState("");
  const [mode, setMode] = useState<DateTimePickerMode>("date"); // allows to switch to date and time
  const [showPickerTime, setShowPickerTime] = useState(false);
  const [showPickerDate, setShowPickerDate] = useState(false);
  
  const showMode = (currentMode: DateTimePickerMode) => {
    setMode(currentMode);
    if(currentMode === "date"){
      setShowPickerDate(true);
      setShowPickerTime(false)
    }else {
      setShowPickerDate(false);
      setShowPickerTime(true)
    } 
  };

  const onDateOrTimePickerChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {   
    const currentDate = selectedDate || date;
   
    let tempDate = new Date(String(currentDate));
    if (mode === "date") {
      setShowPickerDate(Platform.OS === "ios");
      const usDate = getUsDate(tempDate);     
      setDateString(usDate);
      setShowPickerDate(false);
    } else {
     
      setShowPickerTime(Platform.OS === "ios");
      const formattedTime  = getUsTime(tempDate);    
      setTime(formattedTime);
      setShowPickerTime(false);
    }
  };

  const handleReturnHome = () => {
    navigation.navigate("home");
  };

  const handleMealName = (value: string) => {
    setMealName(value);
  };

  const handleDescription = (value: string) => {
    setDescription(value);
  };
 
  const handleActiveButton = (value: string) => {
    setActiveButtonContent(value );
  };

  const handledNewMeal = async () => {
    if (!activeButtonContent) {
      return Alert.alert("Meal within your diet?", "Please check Yes or No.");
    }

    if (!mealName.trim()) {
      return Alert.alert("Please fill out your Meal name.");
    }

    if (!description.trim()) {
      return Alert.alert("Please describe your Meal.");
    }

     if(!dateString.trim()){
      return Alert.alert('Please pick a date.');
     }

    if (!time.trim()) {
      return Alert.alert("Please pick a time.");
    }
    const newMeal  = {
      mealName, 
      description, 
      date: dateString,      
      time, 
      id: String(uuid.v4()), 
      withinDiet: activeButtonContent === 'Yes'? true: false ,
    
    };
  
    try {
      await createMeal(newMeal); 

    }catch(error){
      if(error instanceof AppError){
        Alert.alert('Failed, duplicated Meal', error.message)
      }
        
        console.log(error)
      
    }
    

    navigation.navigate("feedback", { activeButton: activeButtonContent === 'Yes' ? true : false  });
  }; 


  const handleFocus = (value: DateTimePickerMode) => {
    showMode(value);
    
  };

  const handleBlur = (value: string) => {    
    value === 'date' ? setShowPickerDate(false) : setShowPickerTime(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                    <FormInput
                      width={width > 750 ? 650 : 327}
                      height={48}
                      placeholder="Meal name"
                      value={mealName}
                      onChangeText={handleMealName}
                    />
                  </FieldWrapper>
                </FieldHolder>

                <FieldHolder>
                  <Label>Description</Label>
                  <FieldWrapper direction="row" justify="center">
                    <FormInput
                      width={width > 750 ? 650 : 327}
                      height={description ? 110 : 48}
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
                  {showPickerDate ? (
                    <FieldHolder style={{ alignItems: 'center', justifyContent: 'center', width: '50%'}}>
                        <Label>Select the date</Label>
                      <DateTimePicker
                        value={date}
                        testID="dateTimePicker"
                        mode={mode}
                        display="default"
                        onChange ={onDateOrTimePickerChange}
                        is24Hour={true}
                      />
                    </FieldHolder>
                  ) : (
                    <FieldHolder>
                      <Label>Date</Label>
                      <FormInput
                        width={width > 750 ? 315 : 153}
                        height={48}
                        placeholder="mm/dd/yy"
                        value={dateString}                    
                        onFocus={handleFocus.bind(this, "date")}
                        onBlur={handleBlur.bind(this, "date")}
                      />
                    </FieldHolder>
                  )}


                    {showPickerTime ? (
                      
                      <FieldHolder style={{ alignItems: 'center', justifyContent: 'center',  width: '50%'}}>
                        <Label>Select the time</Label>
                        <DateTimePicker
                          value={date}
                          testID="dateTimePicker"
                          mode={mode}
                          display="default"
                          onChange={onDateOrTimePickerChange}
                          is24Hour={true}
                          />
                      </FieldHolder>
                    ) : (
                        <FieldHolder>
                          <Label>Hour</Label>
                        <FormInput
                          width={width > 750 ? 315 : 153}
                          height={48}
                          placeholder="hh:mm"
                          value={time}                        
                          onFocus={handleFocus.bind(this, "time")}
                          onBlur={handleBlur.bind(this, "time")}
                        />
                      </FieldHolder>
                    )}
                
                </FieldWrapper>

                <FieldWrapper direction="row" justify="space-between">
                  <FieldHolder>
                    <Label>Is this meal within your Diet ?</Label>
                    <FieldWrapper
                      direction="row"
                      justify="space-between"
                      gap={6}
                    >
                      <FormButton
                        width={width > 750 ? 315 : 160}
                        backgroundColor={
                          activeButtonContent === 'Yes'
                            ? theme.COLORS.brand_green_light
                            : theme.COLORS.base_gray_600
                        }
                        title="Yes"
                        dotColor={theme.COLORS.brand_green_dark}
                        border={activeButtonContent === 'Yes' ? 1 : 0}
                        borderColor={
                          activeButtonContent === 'Yes'
                            ? theme.COLORS.brand_green_dark
                            : ""
                        }
                        onPress={() => handleActiveButton("Yes")}
                      />

                      <FormButton
                        width={width > 750 ? 315 : 160}
                        backgroundColor={
                          activeButtonContent === 'No'
                            ? theme.COLORS.brand_red_light
                            : theme.COLORS.base_gray_600
                        }
                        title="No"
                        dotColor={theme.COLORS.brand_red_dark}
                        border={activeButtonContent === 'No' ? 1 : 0}
                        borderColor={
                          activeButtonContent === 'No'
                            ? theme.COLORS.brand_red_dark
                            : theme.COLORS.base_gray_600
                        }
                        onPress={() => handleActiveButton("No")}
                      />
                    </FieldWrapper>
                  </FieldHolder>
                </FieldWrapper>
              </Form>
            </InnerContainer>

            <BottomContainer>
              <MainButton
                backgroundColor={theme.COLORS.base_gray_200}
                title="Create Meal"
                titleColor={theme.COLORS.base_white}
                height={50}
                width={width > 750 ? 650 : 327}
                onPress={handledNewMeal}
              />
            </BottomContainer>
          </Container>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
