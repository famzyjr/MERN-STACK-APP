import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "./store";

const initialState = {
post: {},
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers:{
        getPosts(state, action){
            state.post = action.payload;
        },
    },
});

export default postSlice.reducer;

export function SetPosts(post){
    return (dispatch, getstate) =>{
        dispatch(postSlice.actions.getPosts(post));
    };
}