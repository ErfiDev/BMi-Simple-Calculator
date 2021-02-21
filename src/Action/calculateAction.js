const calculateAction = ()=>{
    return async (dispatch , getState)=>{
        const weight = getState().weight;
        const height = getState().height;
        
        const meter = Math.pow(height , 2);
        const calculate = weight / meter;

        const Rounde = calculate.toFixed(2);

        await dispatch({type: "CALCULATE" , payload: [Rounde]});
    }
}

export default calculateAction;