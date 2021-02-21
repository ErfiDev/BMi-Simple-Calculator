import React from 'react';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import {useDispatch} from 'react-redux';
import toggle from '../Action/toggleChartAction';

const ChartBMi = () => {

    const dis = useDispatch();

    return ( 
        <div id="chart-bmi">
            <div className="img-container">
                <img src="./img/bmi-crop.jpg" alt="bmi chart" />
            </div>
 
            <Button
                onClick={()=> dis(toggle())} 
                variant="contained" 
                color="secondary" 
            >
                Close &nbsp; <CancelIcon fontSize="small" />
            </Button>
        </div>
    );
}
 
export default ChartBMi;