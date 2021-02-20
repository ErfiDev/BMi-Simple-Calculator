export const WeightAction = e=>{
    return async (dispatch)=>{
        let count = e.target.value;

        await dispatch({type: "WEIGHT_COUNT" , payload: count});
    }
}

export const HeightAction = e=>{
    return async (dispatch)=>{
        let count = e.target.value;

        await dispatch({type: "HEIGHT_COUNT" , payload: count});
    }
}