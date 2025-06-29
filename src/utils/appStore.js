import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import ChatSlice from "./ChatSlice";
import searchedVideos from "./searchVideos"
const appStore=configureStore({
   reducer:{
    app:appSlice,
    search:searchSlice,
    chat:ChatSlice,
    searchedVideos:searchedVideos,
   }
})
export default appStore;