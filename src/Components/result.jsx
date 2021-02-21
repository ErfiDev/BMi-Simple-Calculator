import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';
import toggle from '../Action/toggleChartAction';
 
const Result = ({bmi , condition})=>{
    
    const dis = useDispatch();

    return(
        <div id="result">

            <h2 className="bmi-result">
                Your BMi is 
                &nbsp;
                <span id="span-bmi" style={{borderColor: condition}}>
                    {bmi}
                </span>
            </h2>

            <Button 
                onClick={()=> dis(toggle())}
                variant="contained" 
                color="primary" 
                style={{fontFamily: "Poppins , sans-serif"}}
            >
                Show BMi Chart
                    &nbsp;
                <VisibilityIcon fontSize="small" />

            </Button>

        </div>
    );
}

export default Result;