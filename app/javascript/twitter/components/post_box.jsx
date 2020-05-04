import React, { Component } from 'react';

class PostBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: {
        id: 20, 
        name: "User 3",
        title: '',
        content: ''
      }
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    this.props.savePost(this.state.post);
    this.setState({
      post: {
        id: Date.now(), 
        name: "User 3",
        title: '',
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
          <input name='title' type='text' value={this.state.post.title} onChange={this.onChange}></input>
          <textarea name='content' value={this.state.post.content} onChange={this.onChange}>
          </textarea>
          <button type='submit'>Post</button>
        </form>
      </div>
    )
  }
}

export default PostBox;