import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';


export default function App() {
  const [ fontsLoaded ] = useFonts({ Nunito_400Regular, Nunito_700Bold });


  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!fontsLoaded ? <View><Text>....Loading</Text></View>: 
      
      <Text>Open up App.tsx to start working on your app!</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
