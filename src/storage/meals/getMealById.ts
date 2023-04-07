import { getAllMeals } from "./getAllMeals";

export const getMealById = async(id: string)=>{
    try{
        const storedMeals = await  getAllMeals();
        const meal = storedMeals.filter(meal => meal.id === id);
        return meal;

    }catch(error){
        throw error
    }
    

};