import * as types from './action_types';

function fetchPosts() {
  return fetch(`/api/v1/posts`, { credentials: "same-origin" })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return { type: types.FETCH_POSTS, posts: data };
  });
}