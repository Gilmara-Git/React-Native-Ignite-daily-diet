import { MealStorageDTO } from '@storage/meals/MealStorageDTO';

export const calculatePercentage=( mealsList: MealStorageDTO[] )=>{
    const total = mealsList.length;
    const mealsWithinDiet = mealsList.filter(meal =>{
        return meal.withinDiet === true; 
    })


    const percentage =  (mealsWithinDiet.length / total) * 100;
    return percentage.toFixed(2);
}


