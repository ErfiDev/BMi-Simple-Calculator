import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
 
const Result = ({bmi , condition})=>{
    return(
        <div id="result">

            <h2 className="bmi-result">
                Your BMi is 
                &nbsp;
                <span id="span-bmi" style={{borderColor: condition}}>
                    {bmi}
                </span>
            </h2>

            {/* <button className="show-bmi-chart">
                Show BMi Chart <VisibilityIcon fontSize="inherit" />
            </button> */}

            <Button variant="contained" color="primary" style={{fontFamily: "Poppins , sans-serif"}}>
                Show BMi Chart
                    &nbsp;
                <VisibilityIcon fontSize="small" />
            </Button>

        </div>
    );
}

export default Result;