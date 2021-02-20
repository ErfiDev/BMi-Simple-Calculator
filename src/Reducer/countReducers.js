export const WeightReducer = (state = 0 , action)=>{
    switch(action.type)
    {
        case "WEIGHT_COUNT":
            return action.payload;

        default: return state;
    }
}

export const HeightReducer = (state = 0 , action)=>{
    switch(action.type)
    {
        case "HEIGHT_COUNT":
            return action.payload;

        default: return state;
    }
}