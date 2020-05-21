import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/tracks';

const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));