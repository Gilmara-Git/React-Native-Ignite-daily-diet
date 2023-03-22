import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { StatisticsScreen } from '@screens/StatisticsScreen';



export const AppRoutes = ()=>{

    const { Navigator, Screen }  = createNativeStackNavigator();

    return (
        <Navigator screenOptions={{ 
            headerShown: false,
            animation: "fade_from_bottom"
            }}>
            <Screen name="home" component={Home}/>
            <Screen name="statistics" component={StatisticsScreen}/>
        </Navigator>

    )
};