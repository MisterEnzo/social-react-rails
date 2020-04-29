import React from 'react';

import Post from '../components/post';

class Feed extends React.Component {
  render() {
    let mockData = [
      {id: 1, name: "User 1", title: "First post", content: "its the first post!"},
      {id: 2, name: "User 2", title: "Second post", content: "its the second post!"},
      {id: 3, name: "User 3", title: "Third post", content: "its the third post!"}
    ];
  
    let posts = mockData.map((post) => {
      return (
        <Post key={ post.id } {...post} />
      )
    });
    return (
      <div class="posts-feed">
        { posts }
      </div>
    ) 
  }
  
}

export default Feed;