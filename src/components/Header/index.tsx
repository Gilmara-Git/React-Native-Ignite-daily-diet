import { useState, useEffect } from "react";
import Logo from "@assets/logo.png";
import * as ImagePicker from "expo-image-picker";
import { useWindowDimensions, Alert } from "react-native";
import { Container, Image, AvatarWrapper, Avatar } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { getAvatar } from "@storage/avatar/getAvatar";
import { setAvatar } from "@storage/avatar/setAvatar";

type AvatarType = {
  url: string;
};

export const Header = () => {
  const [imageUrl, setImageUrl] = useState<AvatarType>();
  const { width } = useWindowDimensions();
  
  const getImageHandler = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {      
        await setAvatar(result.assets[0].uri);
        fetchStoredAvatar();

        // This was before implementing AsyncStorage
        // setImageUrl({ url : result.assets[0].uri })
      }
    } catch (error) {
      Alert.alert("An error occurred", `${error}`);
      throw error;
    }
  };

  const fetchStoredAvatar = async () => {
    const avatar = await getAvatar();
    setImageUrl({ url: avatar});
  };
  useEffect(() => {
    fetchStoredAvatar();
  }, []);

  return (
    <Container widthDimensions={width}>
      <Image source={Logo} />
      <AvatarWrapper onPress={getImageHandler}>
        {!imageUrl ? (
          <AntDesign name="camerao" size={24} />
        ) : (
          <Avatar source={{ uri: imageUrl.url }} />
        )}
      </AvatarWrapper>
    </Container>
  );
};
