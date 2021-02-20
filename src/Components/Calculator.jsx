import React from 'react';
import CachedIcon from '@material-ui/icons/Cached';
import HeightIcon from '@material-ui/icons/Height';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const Calculator = () => {
    return ( 
        <div className="calculator-container">
            <div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <FitnessCenterIcon fontSize="large" />
                    </span>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Weight (In KiloGeram)" 
                        aria-label="Username" 
                        aria-describedby="basic-addon1" 
                    />
                </div>

                <div className="input-group mb-2">
                    <span className="input-group-text">
                        <HeightIcon fontSize="large" />
                    </span>
                    <input 
                        placeholder="Height (In Meters)"
                        type="number" 
                        className="form-control" 
                        aria-label="Amount (to the nearest dollar)"
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