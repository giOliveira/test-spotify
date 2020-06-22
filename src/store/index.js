import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import trackReducer from '../reducers/tracks';
import albumReducer from '../reducers/albums';
import artistReducer from '../reducers/artists';

const rootReducer = combineReducers({trackReducer, albumReducer})

const middlewares = [thunk];

export const store = createStore(trackReducer, applyMiddleware(...middlewares));