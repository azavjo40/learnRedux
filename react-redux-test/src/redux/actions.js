// фн для создания action соединения будить в postForm.js
import { CREATE_POST } from "./types";

export function createPost(post){
return{
type: CREATE_POST,
payload: post
}
}