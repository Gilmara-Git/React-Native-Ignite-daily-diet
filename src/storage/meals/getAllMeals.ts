import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from '../storage.config';
import { MealStorageDTO }  from '@storage/meals/MealStorageDTO';


export const getAllMeals = async ()=>{

    try{

        const storage = await AsyncStorage.getItem(MEALS_COLLECTION);
        const mealList: MealStorageDTO[]=  storage? JSON.parse(storage) : []; 
     
        if(mealList.length > 0) {
            mealList.sort((a, b) => {               
                if(a.date < b.date){
                    return -1
                }else if (a.date > b.date){
                    return 1
                }else {
                    return 0
                }
                
            }) 
        }
  

        return mealList;
    

    }catch(error){
        throw error;
    }
};
