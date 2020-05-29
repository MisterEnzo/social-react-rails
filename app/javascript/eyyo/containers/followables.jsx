import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchFollowables, follow } from '../actions/index';

import Followable from '../components/followable';

class Followables extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFollowables();
  }

  handleFollow(event){
    console.log(event);
    console.log("haha");
  }

  render() {
    let followables = this.props.followables.map((follow) => {
      return (
        <Followable key={follow.id} {...follow} follow={this.handleFollow } />
      )
    })
    return (
      <div>
        { followables }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    followables: state.followables
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      fetchFollowables: fetchFollowables,
      follow: follow
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Followables);