import { Home } from '@screens/Home';
import { NewMeal } from '@screens/NewMeal';
import { StatisticsScreen } from '@screens/StatisticsScreen';
import { Feedback } from '@screens/Feedback';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export const AppRoutes = ()=>{

    const { Navigator, Screen }  = createNativeStackNavigator();

    return (
        <Navigator screenOptions={{ 
            headerShown: false,
            animation: "fade_from_bottom"
            }}>
            <Screen name="home" component={Home}/>
            <Screen name="statistics" component={StatisticsScreen}/>
            <Screen name="new_meal" component={NewMeal}/>
            <Screen name="feedback" component={Feedback}/>
        </Navigator>

    )
};