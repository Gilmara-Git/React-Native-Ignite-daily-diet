import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from '../storage.config';


export const getMeals = async ()=>{

    try{
        console.log('fiu chamada')
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION);
        console.log(storage, 'linha 9 ')


    }catch(error){
        throw error;
    }
};
