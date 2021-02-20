import {combineReducers} from 'redux';
import toggle from './toggle';
import {HeightReducer , WeightReducer} from './countReducers';

const Reducers = combineReducers({
    toggle,
    height: HeightReducer,
    weight: WeightReducer
});

export default Reducers;