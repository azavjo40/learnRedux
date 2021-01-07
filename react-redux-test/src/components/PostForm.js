import {useState} from 'react'
import {connect} from 'react-redux'
import { createPost, showAlert } from '../redux/actions'
import { Alert } from './Alert'

const PostForm = (props)=>{
const [form, setForm] = useState({title:''})
const chanchInputHandler = (e)=>{
setForm({...form, [e.target.name]: e.target.value})
}
const submitHandler = (e)=>{
e.preventDefault()
// trim это пробел 
const title = form.title
if(!title.trim()){
return props.showAlert('Названия поста не можеть быть пустим')
}
const newPost = {title, id:Date.now().toString()}
props.createPost(newPost)
setForm({title: ''})
}
return(
<form onSubmit={(e)=>submitHandler(e)}>
    {props.alert && <Alert text={props.alert} />}
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
createPost, showAlert
// второй параметр для передача props payload
}

const mapStateToProps = state => ({
alert: state.app.alert
})
export default connect(mapStateToProps,mapDispatreturn )(PostForm)
