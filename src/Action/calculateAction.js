const calculateAction = ()=>{
    return async (dispatch , getState)=>{
        const weight = getState().weight;
        const height = getState().height;
        
        const meter = Math.pow(height , 2);
        const calculate = weight / meter;

        await dispatch({type: "CALCULATE" , payload: [calculate]});
    }
}

export default calculateAction;