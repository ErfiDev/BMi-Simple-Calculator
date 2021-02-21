import {combineReducers} from 'redux';
import toggle from './toggle';
import {HeightReducer , WeightReducer} from './countReducers';
import Calculate from './calculat';
import toggleChart from './toggleChart';

const Reducers = combineReducers({
    toggle,
    height: HeightReducer,
    weight: WeightReducer,
    Calculate,
    toggleChart
});

export default Reducers;