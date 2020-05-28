import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchFollowables } from '../actions/index';

import Followable from '../components/followable';

class Followables extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFollowables();
  }

  render() {
    let followables = this.props.followables.map((follow) => {
      return (
        <Followable key={follow.id} {...follow} />
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
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Followables);