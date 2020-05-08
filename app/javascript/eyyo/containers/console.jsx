import React, { Component } from 'react';

import Feed from '../components/feed';
import PostBox from '../components/post_box';

class Console extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: 1, name: "User 1", content: "its the first post!"},
        {id: 2, name: "User 2", content: "its the second post!"},
        {id: 3, name: "User 3", content: "its the third post!"}
      ]
    }
    this.savePost = this.savePost.bind(this)
  }


  savePost(post){
    this.setState({ data: [ ...this.state.data, Object.assign({}, post)] });
  }

  render() {
    return(
      <div className='ui center aligned container'>
        <Feed data={this.state.data} />
        <PostBox savePost={this.savePost} /> 
      </div>
    )
  }
}

export default Console;