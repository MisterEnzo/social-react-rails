import React, { Component } from 'react';

class PostBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      course: {
        id: 3, 
        name: "User 3"
      }
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    this.props.savePost(this.state.course);
    this.setState({
      course: {
        id: 3, 
        name: "User 3"
      }
    });
  }

  onChange(event){
    this.setState({ text: event.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' value={this.state.course.title} onChange={this.onChange}></input>
          <textarea value={this.state.course.content} onChange={this.onChange}>
          </textarea>
          <button type='submit'>Post</button>
        </form>
      </div>
    )
  }
}

export default PostBox;