import React from 'react'
import FetchedPosts from './components/FechtedPosts';
import PostForm from "./components/PostForm";
import Posts from './components/Posts';

function App() {
return (
<div className="container pt-3">
  <div className="row">
    <div className="col">
      <PostForm />
    </div>
  </div>
  <div className="row">
    <div className="col">
      <h2>Синхронные посты</h2>
      <Posts />
    </div>
    <div className="col">
      <h2>Асинхроные посты</h2>
      <FetchedPosts posts={[]} />
    </div>
  </div>
</div>
)
}

export default App