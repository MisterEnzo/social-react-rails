import React from 'react';

export default function Follow(props){
  return (
    <div class="card w-50">
      <div class="card-body">
        <img className="rounded-circle avatar" src={props.gravatar} />
        <h5>{props.username}</h5>
      </div>
    </div>  
  )
}