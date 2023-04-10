import { useState, useCallback } from "react";
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
import { FormButton } from "@components/FormButton";
import { FormInput } from "@components/FormInput";
import { useTheme } from "styled-components/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useRoute , useFocusEffect} from '@react-navigation/native';
import { RoutesParamList } from "@routes/routesTypes";
import {
  useWindowDimensions, 
  TouchableWithoutFeedback,
  Keyboard, 
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";


import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { DateTimePickerMode } from '@screens/NewMeal';
import  { getUsDate, getUsTime } from '@utils/dateTimePickerHelper';
import { getMealById } from '@storage/meals/getMealById';
import  { editMeal } from '@storage/meals/editMeal';

type NewMealNavigationProps = {
  navigation: NativeStackNavigationProp<RoutesParamList, "edit_meal">;
};

type EditMealParams = {
  id: string; 
  withinDiet: boolean;
}

export const EditMeal = ({ navigation }: NewMealNavigationProps) => {
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
  const { params } =  useRoute();
  const { id, withinDiet } = params as EditMealParams;


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
    // setDate(currentDate);
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
    navigation.navigate('show_meal', { id: id, withinDiet: withinDiet });
  };

  const handleMealName = (value: string) => {
    setMealName(value);
  };

  const handleDescription = (value: string) => {
    setDescription(value);
  };



  const handleActiveButton =( value: string)=>{
    setActiveButtonContent(value);
  };
  
  const handledEditMeal = async ()=>{
    const updatedMeal = {
      id: id,
      mealName,
      description,
      date: dateString,
      time,
      withinDiet: activeButtonContent === 'Yes' ? true : false

    };

    await editMeal(updatedMeal);

    navigation.navigate("show_meal", { id: id,withinDiet: updatedMeal.withinDiet });
  } 
 
  const handleFocus = (value: DateTimePickerMode) => {
    showMode(value);
    
  };

  const handleBlur = (value: string) => {    
    value === 'date' ? setShowPickerDate(false) : setShowPickerTime(false);
  };

  const fetchMeal = async()=>{
    const meal =  await getMealById(id);  
    setMealName(meal[0].mealName);
    setDescription(meal[0].description);
    setDateString(meal[0].date);
    setTime(meal[0].time);
    setActiveButtonContent(meal[0].withinDiet === true ? 'Yes': 'No')
    }

  useFocusEffect(useCallback(()=>{
    fetchMeal();

  }, []))

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
                  {showPickerDate ? (
                    <FieldHolder style={{ alignItems: 'center', justifyContent: 'center', width: '50%'}}>
                        <Label>Select the date</Label>
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
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
