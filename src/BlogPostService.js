import { get } from './api';

export function getSummaries() {
  return get('blogPosts')
    .then(rawBlogPosts => (
      rawBlogPosts.map(rawBlogPost => new BlogPost(rawBlogPost))
    ));
}

class BlogPost {
  #id;

  constructor({ id, ...attributes }) {
    this.#id = id;
    Object.assign(this, attributes);
  }

  getBody() {
    return get(`blogPosts/${this.#id}`)
      .then(response => {
        this.body = response.body;
      });
  }
}
