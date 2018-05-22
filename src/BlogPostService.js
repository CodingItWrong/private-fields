import { get } from './api';

export function getSummaries() {
  return get('blogPosts');
}

export function getBody(post) {
  return get(`blogPosts/${post.id}`)
    .then(response => {
      post.body = response.body;
    });
}
