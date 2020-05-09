import * as types from './action_types';

export function fetchPosts() {
  console.log("fetching posts");
  return fetch(`/api/v1/posts`, { credentials: "same-origin" })
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return { type: types.FETCH_POSTS, posts: data };
  });
}