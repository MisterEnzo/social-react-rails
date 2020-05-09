import React, { Component } from 'react';

import Post from './post';

const Feed = (props) => {
  
  if (!props.posts) {
    return (
      <div>Loading ...</div>
    )
  }
  
  let posts = props.posts.map((post) => {
    return (
      <Post key={post.id} { ...post } />
    )
  })

  return (
    <div className="posts-feed">
      { posts }
    </div>
  ) 
}

export default Feed;