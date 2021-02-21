import {combineReducers} from 'redux';
import toggle from './toggle';
import {HeightReducer , WeightReducer} from './countReducers';
import Calculate from './calculat';

const Reducers = combineReducers({
    toggle,
    height: HeightReducer,
    weight: WeightReducer,
    Calculate
});

export default Reducers;