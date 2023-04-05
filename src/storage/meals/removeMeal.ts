import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from '../storage.config';

export const removeMeal = async ()=>{
    try{

        await AsyncStorage.removeItem(MEALS_COLLECTION);

    }catch(error){
        throw error;
    }
}