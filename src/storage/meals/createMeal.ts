import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from '../storage.config';
import { getAllMeals } from '@storage/meals/getAllMeals';
import { MealStorageDTO } from '@storage/meals/MealStorageDTO';
import { AppError } from '@utils/AppError';


export const createMeal = async ( newMeal: MealStorageDTO )=>{

    try{     
      
        const storedMeals = await getAllMeals();
        const mealAlreadyRegistered = storedMeals.filter((item)=>{
            return item.date === newMeal.date && item.mealName === newMeal.mealName    
        })
   
        if(mealAlreadyRegistered.length > 0){
           throw new AppError(`"${newMeal.mealName}" has been registered on "${newMeal.date}" already!`)
        }
        
        await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify([...storedMeals, newMeal]));
  
}catch(error){
    throw error;
}
};