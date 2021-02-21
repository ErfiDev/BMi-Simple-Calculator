const calculateAction = ()=>{
    return async (dispatch , getState)=>{
        const weight = getState().weight;
        const height = getState().height;
        
        const meter = Math.pow(height , 2);
        const calculate = weight / meter;

        const Rounde = calculate.toFixed(2);
        const Num = parseFloat(Rounde);

        let condition;

        if(Num <= 18) condition = "blue"
        if(Num > 18 && Num <= 24) condition = "green"
        if(Num > 24 && Num <= 29) condition = "yellow"
        if(Num > 29) condition = "red"

        const Final = {
            bmi: Num,
            condition
        };



        await dispatch({type: "CALCULATE" , payload: Final});
    }
}

export default calculateAction;