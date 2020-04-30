import React, { Component } from 'react';

import Post from './post';

const Feed = (props) => {
  let mockData = props.data;
  
  let posts = mockData.map((post) => {
    return (
      <Post key={ post.id } {...post} />
    );
  });

  return (
    <div className="posts-feed">
      { posts }
    </div>
  ) 
}

export default Feed;