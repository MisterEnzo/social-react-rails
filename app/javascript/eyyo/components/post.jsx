import React from 'react';

const Post = (props) => {
  return (
    <div>
      <p>{props.username}</p>
      <p>{props.content}</p>
      <p>{props.timeStamp}</p>
    </div>
  )
}

export default Post;