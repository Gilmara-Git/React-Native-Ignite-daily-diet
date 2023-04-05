import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from '../storage.config';
import { getMeals } from '@storage/meals/getMeals';
import { removeMeal } from '@storage/meals/removeMeal';

export const createMeal = async ( newMeal: object)=>{

    try{     
        await removeMeal();
  
}catch(error){
    throw error;
}
};