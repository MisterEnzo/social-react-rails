import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchFollows } from '../actions/index';

import Follow from '../components/follow';

class Follows extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFollows();
  }

  render() {
    let follows = this.props.follows.map((follow) => {
      return (
        <Follow key={follow.id} {...follow} />
      )
    })
    return (
      <div>
        { follows }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    follows: state.follows
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      fetchFollows: fetchFollows,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Follows);