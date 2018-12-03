import { get, post } from './api';

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

  postComment(commentData) {
    const url = `blogPosts/${this.#id}/comments`;

    const requestPayload = {
      data: {
        type: 'comment',
        attributes: commentData,
      },
    };

    return post(url, requestPayload)
      .then(response => {
        const { id } = response.data;
        return new Comment({ id, blogPost: this, ...commentData });
      })
      .catch(error => {
        switch (error.status) {
        case 500:
          throw new Error(
            `A server error occurred when trying to comment on "${this.title}"`,
          );
        case 403:
          throw new Error(
            `Sorry, you do not have access to comment on "${this.title}".`,
          );
        }
      });
  }
}

class Comment {
  #id;

  constructor({ id, ...attributes }) {
    this.#id = id;
    Object.assign(this, attributes);
  }
}
