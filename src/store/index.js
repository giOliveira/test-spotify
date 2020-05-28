import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import trackReducer from '../reducers/tracks';
import albumReducer from '../reducers/albums';

const rootReducer = combineReducers({trackReducer, albumReducer})

const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));