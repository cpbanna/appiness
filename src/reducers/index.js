
import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import details from './details';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['details']
}

const rootReducer = combineReducers({
    details
});

export default persistReducer(persistConfig, rootReducer);