function Calculate (state = [] , action)
{
    switch(action.type)
    {
        case "CALCULATE":
            return action.payload;

        default: return state;
    }
}

export default Calculate;