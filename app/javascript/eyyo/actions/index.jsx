import * as types from './action_types';

export function fetchPosts() {
  return fetch(`/api/v1/posts`, {credentials: "same-origin"})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return {type: types.FETCH_POSTS, posts: data};
  });
}

export function sendPost(post) {
  const body = {post: {content: post}};
  const url = '/api/v1/posts'
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  
  return fetch(url, {
    credentials: "same-origin",
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken
    },
    body: JSON.stringify(body)
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return {type: types.SEND_POST, post: data};
  });
}

export function fetchFollowables(){
  return fetch(`/api/v1/follow_list`, {credentials: "same-origin"})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return {type: types.FETCH_FOLLOWABLES, followables: data};
  })
}

export function follow(userId) {
  const body = {user: {user_id: userId}};
  const url = `/api/v1/relationships`;
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  return fetch(url, {
    credentials: "same-origin",
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken
    },
    body: JSON.stringify(body)
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return {type: types.FOLLOW, follow: data};
  })
}

export function unfollow(userId) {
  const url = `api/v1/relationships/${userId}`
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  return fetch(url, {
    credentials: "same-origin",
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken
    }
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return {type: types.UNFOLLOW, unfollow: data};
  })
}

export function fetchFollowers(){
  return fetch('api/v1/followers', {credentials: "same-origin"})
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return {type: types.FETCH_FOLLOWERS, followers: data};
    })
}

export function fetchFollowing(){
  return fetch('api/v1/following', {credentials: "same-origin"})
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return {type: types.FETCH_FOLLOWING, following: data};
    })
}