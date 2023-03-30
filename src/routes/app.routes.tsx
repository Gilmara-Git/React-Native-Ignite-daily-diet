import { Home } from '@screens/Home';
import { NewMeal } from '@screens/NewMeal';
import { ShowMeal } from '@screens/ShowMeal';
import { EditMeal } from '@screens/EditMeal';;
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
            <Screen name="show_meal" component={ShowMeal}/>
            <Screen name="edit_meal" component={EditMeal}/>
           
        </Navigator>

    )
};