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


export const createPost = (postData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
      .then(result => result.json())
      .then(data => dispatch({
        type: NEW_POST,
        payload: postData
      }))
};
