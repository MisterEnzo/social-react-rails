import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Feed from '../components/feed';
import PostBox from '../components/post_box';

class Console extends Component {
  constructor(props){
    super(props);
  
    this.savePost = this.savePost.bind(this)
  }


  savePost(post){
    this.setState({ data: [ ...this.state.data, Object.assign({}, post)] });
  }

  render() {
    return(
      <div className='ui center aligned container'>
        <Feed data={this.props.posts} />
        <PostBox savePost={this.savePost} /> 
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Console);