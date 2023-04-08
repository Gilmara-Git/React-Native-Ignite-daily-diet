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
        percentage: number,       
        id: string
    },
    edit_meal: {
        percentage: number,       
        id: string
    }

}