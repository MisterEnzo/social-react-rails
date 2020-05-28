import React from 'react';

export default function Follow(props){
  return (
    <div className="card w-50">
      <div className="card-body">
        <img className="rounded-circle avatar" src={props.gravatar} />
        <h5>{props.username}</h5>
      </div>
    </div>  
  )
}