import * as types from './action_types';

export function fetchPosts() {
  return fetch(`/api/v1/posts`, { credentials: "same-origin" })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return { type: types.FETCH_POSTS, posts: data };
  });
}

export function sendPost(post) {
  const body = { post: {content: post}};
  const url = '/api/v1/posts'
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  
  return fetch(url, {
    credentials: "same-origin",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    body: JSON.stringify(body)
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return { type: types.SEND_POST, post: data };
  });
}

export function fetchFollows(){
  return fetch(`/api/v1/follow_list`, { credentials: "same-origin" })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return { type: types.FETCH_FOLLOWS, follows: data };
  })
}