const toggleChart = (state = false , action)=>
{
    switch(action.type)
    {
        case "CHART":
            return !state;

        default: return state;
    }
}

export default toggleChart;