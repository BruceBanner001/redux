import {createStore} from 'redux';
import countReducer from './reducers/Count';

const store = createStore(countReducer);


export default store;

