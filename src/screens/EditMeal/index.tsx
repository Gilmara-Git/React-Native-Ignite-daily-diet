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



import { getMeals } from "@storage/meals/getMeals";

import DateTimePicker from "@react-native-community/datetimepicker";
import  { getUsDate, getUsTime } from '@utils/dateTimePickerHelper';

type NewMealNavigationProps = {
  navigation: NativeStackNavigationProp<RoutesParamList, "edit_meal">;
};

export const EditMeal = ({ navigation }: NewMealNavigationProps) => {
  const [activeButtonContent, setActiveButtonContent] = useState("");
  const theme = useTheme();
  const { width } = useWindowDimensions();

  const [mealName, setMealName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<object>(new Date());

  const [time, setTime] = useState("");
  const [dateString, setDateString] = useState("");
  const [mode, setMode] = useState("date"); // allows to switch to date and time
  const [showTime, setShowTime] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const showMode = (currentMode: string) => {
    setMode(currentMode);
    if(currentMode === "date"){
      setShowDate(true);
      setShowTime(false)
    }else {
      setShowDate(false);
      setShowTime(true)
    } 

  };
  const onChange = (event: object, selectedDate: object) => {   
    const currentDate = selectedDate || date;
    // setDate(currentDate);
    let tempDate = new Date(String(currentDate));
    if (mode === "date") {
      setShowDate(Platform.OS === "ios");
      const usDate = getUsDate(tempDate);     
      setDateString(usDate);
      setShowDate(false);
    } else {
     
      setShowTime(Platform.OS === "ios");
      const formattedTime  = getUsTime(tempDate);    
      setTime(formattedTime);
      setShowTime(false);
    }
  };
  
  const handleReturnHome = () => {
    navigation.navigate('home');
  };

  const handleDescription = (value: string) => {
    setDescription(value);
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
 
  const handleFocus = (value: string) => {
    showMode(value);
    
  };

  const handleBlur = (value: string) => {    
    value === 'date' ? setShowDate(false) : setShowTime(false);
  };

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
                  {showDate ? (
                    <FieldHolder style={{ alignItems: 'center', justifyContent: 'center', width: '50%'}}>
                        <Label>Select the date</Label>
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="mode"
                        display="default"
                        onChange ={onChange}
                        is24HourSource="locale"
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


                    {showTime ? (
                      
                      <FieldHolder style={{ alignItems: 'center', justifyContent: 'center',  width: '50%'}}>
                        <Label>Select the time</Label>
                        <DateTimePicker
                          value={date}
                          testID="dateTimePicker"
                          mode={mode}
                          display="default"
                          onChange={onChange}
                          is24HourSource="locale"
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
