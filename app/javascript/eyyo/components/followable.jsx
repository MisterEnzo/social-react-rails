import React, { useState } from 'react';

export default function Follow(props){
  const [following, setFollowing] = useState(false);
  
  function handleFollow(event){
    if (following) {
      setFollowing(false);
      // should fire unfollow action. id will be sent to the action via data.
      props.unfollow(event.target.dataset.id);
    } else {
      setFollowing(true);
      // should fire follow action. id will be sent to the action via data.
      props.follow(event.target.dataset.id);
    }
  }

  return (
    <div className="card w-50">
      <div data-id={props.id} className="card-body" className={ following ? 'following' : '' } onClick={(event) => handleFollow(event)}>
        <img className="rounded-circle avatar" src={props.gravatar} />
        <h5>{props.username}</h5>
      </div>
    </div>  
  )
}