import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions/index';

import Feed from '../components/feed';
import PostBox from '../components/post_box';

class Console extends Component {
  constructor(props){
    super(props);
  
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return(
      <div className='ui center aligned container'>
        <Feed posts={this.props.posts} />
        <PostBox /> 
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchPosts: fetchPosts
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Console);