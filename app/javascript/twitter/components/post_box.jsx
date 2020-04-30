import React, { Component } from 'react';

class PostBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    this.setState({ text: event.target.value });
  }
  render() {
    return (
      <div>
        <form>
          <textarea value={this.state.value} onChange={this.onChange}>
          </textarea>
          <button type='submit'>Post</button>
        </form>
      </div>
    )
  }
}

export default PostBox;