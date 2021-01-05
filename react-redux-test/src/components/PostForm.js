import {useState} from 'react'
import {connect} from 'react-redux'
import { createPost } from '../redux/actions'

const PostForm = ({createPost})=>{
const [form, setForm] = useState({title:''})
const chanchInputHandler = (e)=>{
setForm({...form, [e.target.name]: e.target.value})
}
const submitHandler = (e)=>{
e.preventDefault()
const title = form.title
if(!title.trim()){
    return
}
const newPost = {title, id:Date.now().toString()}
createPost(newPost)
setForm({title: ''})
}
return(
<form onSubmit={(e)=>submitHandler(e)}>
    <div className="mb-3">
        <label htmlFor="title">Заголовок поста</label>
        <input type="text" className="form-control" id="title" value={form.title} onChange={(e)=>chanchInputHandler(e)}
        name="title"
        />
    </div>
    <button className="btn btn-success" type="submit">Cоздать</button>
</form>
)
}

 const mapDispatreturn = {
   createPost
    // второй параметр для передача props payload
}
export default connect(null,mapDispatreturn )(PostForm)