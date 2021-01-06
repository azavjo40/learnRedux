import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'

const Posts = ({syncPosts})=>{
if(!syncPosts.length){
return<p className="text-center"> Постов пока нет</p>
}
return(
syncPosts.map((post)=>
<Post post={post} key={post.id} />)
)
}

// что бы все state сделаеть props
const mapStateProps = state =>{
return {
// тут присвайиваем от state
syncPosts: state.posts.posts
}
}
// соединения react с redux первий параметр это propsState
export default connect(mapStateProps, null)(Posts)