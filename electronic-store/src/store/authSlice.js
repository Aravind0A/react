import { createSlice } from "@reduxjs/toolkit";

export let authSlice = createSlice({
    name : 'auth',
    initialState : {
        user : null
    },
    reducers:{
        setUser :  (state, action)=>{
            state.user = action.payload;
        },
        removeUser : (state)=>{
            state.user = null;
        }
    }
});

export let{setUser, removeUser} = authSlice.actions
export default authSlice.reducer;