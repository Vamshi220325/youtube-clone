import { createSlice } from "@reduxjs/toolkit";

const searchVidoes=createSlice({
    name:"searched_videos",
    initialState:{
        videolist:[]
    },
    reducers:{
        addVideosList:(state,action)=>{
            state.videolist.push(action.payload)
        },
        removeVideos:(state,action)=>{
            state.videolist.length=0;
        }
        
    }
});
export const {addVideosList,removeVideos}=searchVidoes.actions;
export default searchVidoes.reducer;