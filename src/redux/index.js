import {combineReducers, configureStore} from '@reduxjs/toolkit';
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
    data: mainReducer
})

export const store = configureStore({
    reducer: rootReducer
})