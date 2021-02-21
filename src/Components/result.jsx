import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
 
const Result = ({bmi})=>{
    return(
        <div id="result">

            <h2 className="bmi-result">
                Your BMi is 
                &nbsp;
                <span id="span-bmi">
                    {bmi}
                </span>
            </h2>

            <button className="show-bmi-chart">
                Show  <VisibilityIcon fontSize="inherit" />
            </button>

        </div>
    );
}

export default Result;