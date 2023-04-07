import { getAllMeals } from '@storage/meals/getAllMeals';
import { MealStorageDTO } from '@storage/meals/MealStorageDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storage.config';

export const editMeal = async (meal : MealStorageDTO )=>{
    const allMeals =  await getAllMeals();

    const existingMealIndex = allMeals.findIndex(item => item.id === meal.id)
 

    const mealToBeUpdated = allMeals.find(item => item.id === meal.id);
   
    
    let newMeal = { 
        date: meal.date,
        description: meal.description,
        id: mealToBeUpdated!.id, 
        mealName: meal.mealName,
        time: meal.time,
        withinDiet: meal.withinDiet,
    }


    allMeals.splice(existingMealIndex, 1, newMeal);
    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(allMeals))

    };