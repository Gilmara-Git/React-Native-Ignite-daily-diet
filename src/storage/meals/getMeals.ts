import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from '../storage.config';
import { removeMeal } from '@storage/meals/removeMeal';


export const getMeals = async ()=>{

    try{
        console.log('fiu chamada no getMeal Async Storage')
        // await removeMeal();
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION);
        console.log(storage, 'linha10')
        if(storage){
            const parsed = JSON.parse(storage)
            
            console.log(parsed[0], 'linha14')
        }
        const mealsList = storage ? JSON.parse(storage) : []; 
        console.log(mealsList)
        return mealsList;

    }catch(error){
        throw error;
    }
};
