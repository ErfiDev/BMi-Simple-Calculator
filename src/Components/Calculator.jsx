import React from 'react';
import CachedIcon from '@material-ui/icons/Cached';
import HeightIcon from '@material-ui/icons/Height';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import {useDispatch , useSelector} from 'react-redux';
import {HeightAction , WeightAction} from '../Action/countAction';

const Calculator = () => {

    const weight = useSelector(state => state.weight);
    const height = useSelector(state => state.height);
    const dis = useDispatch();

    return ( 
        <div className="calculator-container">
            <div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <FitnessCenterIcon fontSize="inherit" />
                    </span>
                    <input 
                        type="number" 
                        className="form-control input" 
                        placeholder="Weight (In KiloGeram)" 
                        aria-label="Username" 
                        aria-describedby="basic-addon1" 
                        onChange={(e)=> dis(WeightAction(e))}
                    />
                </div>

                <div className="input-group mb-2">
                    <span className="input-group-text">
                        <HeightIcon fontSize="inherit" />
                    </span>
                    <input 
                        placeholder="Height (In Meters)"
                        type="number" 
                        className="form-control input" 
                        aria-label="Amount (to the nearest dollar)"
                        onChange={(e)=> dis(HeightAction(e))}
                    />
                </div>
            </div>

            <button id="calc-btn">
                Calculate
                &nbsp;
                <CachedIcon fontSize="large" />
            </button>
        </div>
    );
}
 
export default Calculator;