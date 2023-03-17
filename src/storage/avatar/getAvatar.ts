import AsyncStorage from "@react-native-async-storage/async-storage";
import { AVATAR_URL } from "@storage/storage.config";

export const getAvatar = async () => {
  try {
    let storage = await AsyncStorage.getItem(AVATAR_URL);
    let avatar: string = storage ? JSON.parse(storage) : '';

    return avatar;
  } catch (error) {
    throw error;
  }
};
