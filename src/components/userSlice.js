import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  email:'',
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserLoginDetails:(state,action)=>{
            state.email = action.payload.email;
        },
        setSignoutState:(state)=>{
            state.email = null;
        },
    },
});

export const {setUserLoginDetails, setSignoutState} = userSlice.actions;

export const selectUserEmail = (state) => state.user.email;

export default userSlice.reducer;