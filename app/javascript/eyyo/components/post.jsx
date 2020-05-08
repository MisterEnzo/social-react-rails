import React from 'react';

const Post = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.content}</p>
    </div>
  )
}

export default Post;