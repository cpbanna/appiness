import { createStore} from 'redux';
import {persistStore} from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const initialState = {};


export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
);

export const persistor = persistStore(store)

// export default {store, persistor};