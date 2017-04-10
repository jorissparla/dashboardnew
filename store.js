import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import reducer from './lib/reducers';

const createStoreWithMiddleware = applyMiddleware(promise, thunkMiddleware)(createStore);
export default initialState => {
	return createStoreWithMiddleware(reducer, initialState);
};
