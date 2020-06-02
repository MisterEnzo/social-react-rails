import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchFollowables, follow, unfollow } from '../actions/index';

import Followable from '../components/followable';

class Followables extends Component {
  constructor(props) {
    super(props);

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchFollowables();
  }

  handleFollow(userId){
    console.log(`following user ${userId}`);
    this.props.follow(userId);
  }

  handleUnfollow(userId){
    console.log(`unfollowing user ${userId}`);
    this.props.unfollow(userId);
  }

  render() {
    let followables = this.props.followables.map((follow) => {
      return (
        <Followable key={follow.id} {...follow} follow={this.handleFollow}  unfollow={this.handleUnfollow} />
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
      follow: follow,
      unfollow: unfollow
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Followables);