import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: JSON.parse(window?.localStorage.getItem("theme")) ?? {}, 
    edit: false,
};

const userSlice = createSlice({
name: "user",
initialState,
reducers:{
    login(state, action){
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state){
        state.user = null;
        localStorage?.removeItem("user");
    },
    updateProfile(state, action){
        state.edit = action.payload;
      
    },
}
});
export default userSlice.reducer

export function userLogin(user){
    return(dispatch, getState) => {
        dispatch(userSlice.actions.login(user));
    };
};

export function Logout(){
    return(dispatch, getState) => {
        dispatch(userSlice.actions.logout());
    };
};

export function updateProfile(val){
    return(dispatch, getState) => {
        dispatch(userSlice.actions.updateProfile(val));
    }
}

