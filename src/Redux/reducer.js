import  {combineReducers} from "@reduxjs/toolkit";

import useSlice from './postslice';
import   themeSlice from './theme.slice'
import postSlice from  "./postslice";

const rootReducer = combineReducers({
    user: useSlice,
    theme: themeSlice,
    post:  postSlice,
})

export {rootReducer};
