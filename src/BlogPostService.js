import { get } from './api';

export function getSummaries() {
  return get('blogPosts')
    .then(rawBlogPosts => (
      rawBlogPosts.map(rawBlogPost => new BlogPost(rawBlogPost))
    ));
}

export function getBody(post) {
  return get(`blogPosts/${post.id}`)
    .then(response => {
      post.body = response.body;
    });
}

class BlogPost {
  #id;

  constructor({ id, ...attributes }) {
    this.#id = id;
    Object.assign(this, attributes);
  }
}
