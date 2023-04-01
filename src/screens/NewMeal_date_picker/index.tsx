import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react';
import {
  Container,
  InnerContainer,
  Form,
  Label,
  FieldWrapper,
  FieldHolder,
  BottomContainer
} from './styles'
import { ColoredHeader } from '@components/ColoredHeader';
import { MainButton } from '@components/MainButton';
import { AmPmButton } from '@components/AmPmButton';
import { FormButton } from '@components/FormButton';
import { FormInput } from '@components/FormInput';
import { useTheme } from 'styled-components/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@routes/routesTypes';
import {
  useWindowDimensions, 
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView, 
  View, 
  Text,
  TouchableOpacity
} from 'react-native';

import { getMeals } from '@storage/meals/getMeals';

type NewMealNavigationProps = {
  navigation: NativeStackNavigationProp<RoutesParamList, 'new_meal'>;
};

export const NewMeal = ({ navigation }: NewMealNavigationProps) => {
  const [isAmPm, setIsAmPm] = useState('Am');
  const [description, setDescription] = useState('');
  const [mealName, setMealName] = useState('');
  // const [ date, setDate ] = useState('');
  // const [ time, setTime ] = useState('');
  const [ activeButtonContent, setActiveButtonContent ] = useState('');
  const initialDate = new Date();
  const dateList = (initialDate.toLocaleTimeString('en-US').split(':'));
  const AmPm = dateList.pop()?.slice(3);
 
  
  const [ date, setDate ] = useState<object>(new Date());
  const [ time, setTime] = useState('');
  const [ mode, setMode ] = useState('date'); // allows to switch to date and time
  const [ show, setShow ] = useState(false);
  const [ text, setText ] = useState('Empty');

  const onChange = (event: string, selectedDate: object)=>{
    console.log(event, selectedDate)
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(String(currentDate));
    // console.log(tempDate, 'tempDate, liha 60')
    let fDate = tempDate.getMonth() + '.' + tempDate.getDate() + '.' + tempDate.getFullYear();
    let fTime = 'Hours:' + tempDate.getHours() + ': ' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime)

    console.log(fDate + '(' + fTime + ')')

  };

  const showMode = (currentMode: string)=>{
    console.log('Current Mode ', currentMode)
    setShow(true); 
    setMode(currentMode);

  };
  // console.log(mealName, 'linha 39 no new meal')
  // console.log(description, 'linha 39 no new meal')
  const theme = useTheme();
  const { width } = useWindowDimensions();

  const handleReturnHome = () => {
    navigation.navigate('home');
  };

  const handleMealName =(value: string) => {
   
    setMealName(value)
   
  };

  const handleDescription = (value: string) => {
    setDescription(value);
  };

  // const handleDate = (value: string) => {
  //   setDate(value);
  // };

  const handleTime = (value: string) => {
    setTime(value);
  };


  const handleAmPm = (value: string) => {
    setIsAmPm(value);
  };

  const handleActiveButton =( value: string)=>{
    setActiveButtonContent(value);
  };
  
  const handledNewMeal = async()=>{
    if(!activeButtonContent){
     return Alert.alert('Meal within your diet?', 'Please check Yes or No.') 
    }
    // const teste = await getMeals();

 if(!mealName.trim()){
     return Alert.alert('Please fill out your Meal name.');
    }

    if(!description.trim()){
      return Alert.alert('Please describe your Meal.');
     }

    //  if(!date.trim()){
    //   return Alert.alert('Please pick a date.');
    //  }

     if(!time.trim()){
      return Alert.alert('Please pick a time.');
     }
    const newMeal = { date: '02.03.23' , data: [{ name: mealName, time: '', description: description, withinDiet:'' }]}
    console.log(newMeal, 'linha66')

    // get all data, mount the object (Stringify it ) and save in ASyncStorage
    //save a new Meal on the AsyncStorage
    navigation.navigate("feedback", { activeButtonContent});
  } 
return (
<View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
  <Text>{text}</Text>
  
 
    <TouchableOpacity 
      onPress={()=>showMode('date')}
      style={{backgroundColor: 'green', margin: 10}}>
      <Text>Date Pikcer</Text>
    </TouchableOpacity>

    <TouchableOpacity 
      onPress={()=>showMode('time')}
      style={{backgroundColor: 'blue', margin: 10}}>
      <Text>Time Pikcer</Text>
    </TouchableOpacity>

    { show && 
    <DateTimePicker 
      value={date}
      testID="dateTimePicker" 
      mode={mode}
      display="default"
      onChange={onChange}
      is24HourSource="locale"
    
    />}
  
  </View>)

  // return (
  //   <KeyboardAvoidingView
  //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  //     style={{flex: 1}}
  //   >
  //       <ScrollView contentContainerStyle={{flexGrow: 1}}>
  //       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //       <Container>
  //         <ColoredHeader
  //           height={132}
  //           backgroundColor={theme.COLORS.base_gray_500}
  //           fontSize={theme.FONT_SIZE.MD}
  //           arrowColor={theme.COLORS.base_gray_200}
  //           title="New Meal"
  //           left={32}
  //           onClick={handleReturnHome}
  //           top={56}
  //         />
        
  //         <InnerContainer>
  //           <Form width={width > 750 ? 650 : 327}>
  //             <FieldHolder>
  //               <Label>Meal Name</Label>
  //               <FieldWrapper direction="row" justify="center">
  //                 <FormInput
  //                   width={width > 750 ? 650 : 327}
  //                   height={48}
  //                   placeholder="Meal name"
  //                   value={mealName}
  //                   onChangeText={handleMealName}
  //                 />
  //               </FieldWrapper>
  //             </FieldHolder>

  //             <FieldHolder>
  //               <Label>Description</Label>
  //               <FieldWrapper direction="row" justify="center">
  //                 <FormInput
  //                   width={width > 750 ? 650 : 327}
  //                   height={description ? 120 : 48}
  //                   placeholder="Describe your meal"
  //                   editable
  //                   multiline
  //                   textAlignVertical="top"
  //                   numberOfLines={2}
  //                   autoCorrect={false}
  //                   value={description}
  //                   onChangeText={handleDescription}
  //                 />
  //               </FieldWrapper>
  //             </FieldHolder>

  //             <FieldWrapper direction="row" justify="space-between">
  //               <FieldHolder>
  //                 <Label>Date</Label>
  //                 <FormInput
  //                   width={width > 750 ? 315 : 153}
  //                   height={48}
  //                   placeholder="mm.dd.yy"
  //                   value={date}
  //                   onChangeText={handleDate}
  //                 />
  //               </FieldHolder>

  //               <FieldHolder>
  //                 <Label>Hour</Label>
  //                 <FieldWrapper direction="row" justify="space-between" gap={4}>
  //                   <FormInput
  //                     width={width > 750 ? 250 : 110}
  //                     height={48}
  //                     placeholder="hh:mm"
  //                     value={time}
  //                     onChangeText={handleTime}
  //                   />

  //                   <FieldHolder>
  //                     <AmPmButton
  //                       fSize={14}
  //                       fFamily={theme.FONT_FAMILY.NunitoBold700}
  //                       color={
  //                         isAmPm === "Am"
  //                           ? theme.COLORS.base_gray_100
  //                           : theme.COLORS.base_gray_400
  //                       }
  //                       title="Am"
  //                       onPress={handleAmPm.bind(this, "Am")}
  //                     />

  //                     <AmPmButton
  //                       fSize={14}
  //                       fFamily={theme.FONT_FAMILY.NunitoBold700}
  //                       color={
  //                         isAmPm === "Pm"
  //                           ? theme.COLORS.base_gray_100
  //                           : theme.COLORS.base_gray_400
  //                       }
  //                       title="Pm"
  //                       onPress={handleAmPm.bind(this, "Pm")}
  //                     />
  //                   </FieldHolder>
  //                 </FieldWrapper>
  //               </FieldHolder>
  //             </FieldWrapper>
  //             <FieldWrapper direction="row" justify="space-between">
  //               <FieldHolder>
  //                 <Label>Is this meal within your Diet ?</Label>
  //                 <FieldWrapper direction="row" justify="space-between" gap={8}>
  //                       <FormButton 
  //                         width={width > 750 ? 315 : 160}
  //                         backgroundColor={activeButtonContent === "Yes" ? theme.COLORS.brand_green_light : theme.COLORS.base_gray_600}
  //                         title="Yes"
  //                         dotColor={theme.COLORS.brand_green_dark}
  //                         border={activeButtonContent === "Yes" ? 1 : 0 }
  //                         borderColor={activeButtonContent === "Yes" ? theme.COLORS.brand_green_dark: ''}
  //                         onPress={()=>handleActiveButton("Yes")}
  //                         />

  //                       <FormButton 
  //                         width={width > 750 ? 315 : 160}
  //                         backgroundColor={activeButtonContent === "No" ? theme.COLORS.brand_red_light : theme.COLORS.base_gray_600}
  //                         title="No"
  //                         dotColor={theme.COLORS.brand_red_dark}
  //                         border={activeButtonContent === "No" ? 1 : 0 }
  //                         borderColor={activeButtonContent === "No" ? theme.COLORS.brand_red_dark: theme.COLORS.base_gray_600}
  //                         onPress={()=>handleActiveButton("No")}
  //                         />
  //                 </FieldWrapper>
  //               </FieldHolder>
  //             </FieldWrapper>

  //           </Form>
  //         </InnerContainer>
        
  //           <BottomContainer>
  //           <MainButton
  //             backgroundColor={theme.COLORS.base_gray_200}
  //             title="Create Meal"
  //             titleColor={theme.COLORS.base_white}
  //             height={50}
  //             width={width > 750 ? 650 : 327}
  //             onPress={handledNewMeal}
              
          
  //         />
  //         </BottomContainer>
  //       </Container>
  //       </TouchableWithoutFeedback>
  //       </ScrollView>
  //   </KeyboardAvoidingView>
   
  // );
};
