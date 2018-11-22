import { applyMiddleware, createStore as createReduxStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import snackbar from './snackbar/reducer';

const rootReducer = combineReducers({
  snackbar,
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createReduxStore)

export const createStore = () => createStoreWithMiddleware(rootReducer);

export { default as snackbarReducer } from './snackbar/reducer';