// все сбор файль redux 
import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";


export const roodReducer = combineReducers({
posts: postsReducer
})