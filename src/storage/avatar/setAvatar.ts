import AsyncStorage from '@react-native-async-storage/async-storage';
import { AVATAR_URL } from '@storage/storage.config';

export const setAvatar = async (url: string)=>{
    try{
        console.log(url, 'linha6')
        await AsyncStorage.setItem(AVATAR_URL, JSON.stringify(url));
    }catch(error){
        throw error;
    }
}