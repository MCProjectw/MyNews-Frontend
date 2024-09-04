import { combineReducers } from "@reduxjs/toolkit";
import user from './user_reducer';

const rootReducer = combineReducers({
    user,
});

export default rootReducer;