import React, { Component } from 'react';

import Feed from '../components/feed';
import PostBox from '../components/post_box';

class Console extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: 1, name: "User 1", title: "First post", content: "its the first post!"},
        {id: 2, name: "User 2", title: "Second post", content: "its the second post!"},
        {id: 3, name: "User 3", title: "Third post", content: "its the third post!"}
      ]
    }
    this.savePost = this.savePost.bind(this)
  }


  savePost(course){
    this.setState({ data: [ ...this.state.data, Object.assign({}, course)] });
  }

  render() {
    return(
      <div>
        <Feed data={this.state.data} />
        <PostBox savePost={this.savePost} /> 
      </div>
    )
  }
}

export default Console;