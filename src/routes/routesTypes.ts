export type RoutesParamList = {
    home: undefined,
    statistics : {
        color: string,
        subtitle: string,
        title: string,
        arrowColor: string,
        percentage: number

    },
    new_meal: undefined,
    feedback: {
        activeButton: boolean;
    },
    show_meal: {          
        id: string,
        withinDiet: boolean
    },
    edit_meal: {        
        id: string,
        withinDiet: boolean
    }

}