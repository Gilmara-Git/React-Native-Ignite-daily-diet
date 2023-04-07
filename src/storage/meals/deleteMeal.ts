import { getAllMeals } from '@storage/meals/getAllMeals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storage.config';



export const deleteMeal = async (id: string)=>{

    const allMeals =  await getAllMeals();    
    const newMealsList = allMeals.filter(meal=>meal.id !== id);  
    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(newMealsList));

};