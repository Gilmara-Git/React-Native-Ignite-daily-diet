
import { StatusBar } from 'react-native';
import { themes } from './src/themes';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Home } from '@screens/Home';
import { Loading } from '@components/Loading';




export default function App() {
  const [ fontsLoaded ] = useFonts({ Nunito_400Regular, Nunito_700Bold });


  return (
    <ThemeProvider theme={themes}> 
      <StatusBar 
        backgroundColor='#DEDEDE'
        barStyle="dark-content" 
        />

      { !fontsLoaded ? 
      
      <Loading />
      
      : 
      
      <Home />
    }
  
    </ThemeProvider>
  );
}

