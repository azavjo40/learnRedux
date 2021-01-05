import React from 'react'
import Post from './Post'

const FetchedPosts = ({posts})=>{
if(!posts.length){
return <button className="btn btn-primary">Загрузить</button>
}
return(
posts.map((post, i)=>
<Post post={post} key={i} />)
)
}

export default FetchedPosts