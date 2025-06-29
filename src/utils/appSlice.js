import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"name",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu:(state,action)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeSideBar:(state)=>{
            state.isMenuOpen=false;
        },
        
    }
});
export const {toggleMenu,closeSideBar}=appSlice.actions;
export default appSlice.reducer;
