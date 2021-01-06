// фн для создания action соединения будить в postForm.js
import { CREATE_POST, FETCHED_POSTS, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./types";

export function createPost(post){
return{
type: CREATE_POST,
payload: post
}
}

export function showLoader(){
return {
type: SHOW_LOADER,
}
}

export function hideLoader(){
return {
type: HIDE_LOADER
}
}

export function showAlert(text){
return dispach => {
dispach({
type: SHOW_ALERT,
payload: text
})
setTimeout(()=>{
dispach(hideAlert())
},3000)
}
}

export function hideAlert(){
return{
type: HIDE_ALERT
}
}

export function fetchPosts(){
return async dispach =>{
try{
dispach(showLoader())
const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
const json = await response.json()
setTimeout(()=>{
dispach({type: FETCHED_POSTS, payload: json})
dispach(hideLoader())
},500)
}catch(e){}
dispach(showAlert('Что то пошло не так'))
dispach(hideLoader())
}
}