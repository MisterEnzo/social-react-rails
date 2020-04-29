import React from 'react';

const Post = (props) => {
  return (
    <div>
      <p>{props.user}</p>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  )
}

export default Post;