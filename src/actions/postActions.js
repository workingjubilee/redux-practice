import { FETCH_POSTS, NEW_POST } from './types';

export function fetchPosts() {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(result => result.json())
      .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
      }))
  }
};
