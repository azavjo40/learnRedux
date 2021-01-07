import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import { Loader } from './Loader'
import Post from './Post'

const FetchedPosts = ()=>{
//метат как connect соединения a
const dispach = useDispatch()
// чтобы получать как connect что то
const posts = useSelector(state=>state.posts.fetchedPosts)
const loading = useSelector(state => state.app.loading)

if(loading){
return <Loader />
}

if(!posts.length){
return <button className="btn btn-primary" onClick={()=>{dispach(fetchPosts())}}
    >Загрузить</button>
}
return(
posts.map((post)=>
<Post post={post.title} key={post.id} />)
)
}

export default FetchedPosts
