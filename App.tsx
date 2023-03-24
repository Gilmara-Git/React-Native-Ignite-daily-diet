
import { StatusBar } from 'react-native';
import { themes } from './src/themes';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';
import { NewMeal } from '@screens/NewMeal';
import { StatisticsScreen } from '@screens/StatisticsScreen'; 




export default function App() {
  const [ fontsLoaded ] = useFonts({ Nunito_400Regular, Nunito_700Bold });


  return (
    <ThemeProvider theme={themes}> 
      <StatusBar 
        backgroundColor='#FFFFFF'
        barStyle="dark-content" 
        />

      { !fontsLoaded ? 
      
      <Loading />
      
      : 
      // <StatisticsScreen/>
      // <NewMeal />
      <Routes />
    }
  
    </ThemeProvider>
  );
}

