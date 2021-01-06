// все сбор файль redux 
import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { postsReducer } from "./postsReducer";

export const roodReducer = combineReducers({
posts: postsReducer,
app: appReducer
})