import {createStore , compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../Reducer/index';

const Store = createStore(
    Reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default Store;