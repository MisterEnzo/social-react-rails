import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sendPost } from '../actions/index';


class PostBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: {
        content: ''
      }
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    this.props.sendPost(this.state.post.content);
    this.setState({
      post: {
        content: ''
      }
    });
  }

  onChange(event){
    const field = event.target.name;
    let post = Object.assign({}, this.state.post)
    post[field] = event.target.value;
    return this.setState({post: post});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <textarea name='content' value={this.state.post.content} onChange={this.onChange}>
          </textarea>
          <button type='submit'>Post</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { sendPost: sendPost },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(PostBox);