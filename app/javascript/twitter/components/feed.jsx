import React, { Component } from 'react';

import Post from './post';

const Feed = (props) => {
  
  let posts = props.data.map((post) => {
    return (
      <Post {...post} />
    );
  });

  return (
    <div className="posts-feed">
      { posts }
    </div>
  ) 
}

export default Feed;