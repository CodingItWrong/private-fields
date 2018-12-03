import { get, post } from './api';

export function getSummaries() {
  return get('blogPosts')
    .then(rawBlogPosts => (
      rawBlogPosts.map(rawBlogPost => new BlogPost(rawBlogPost))
    ));
}

export class BlogPost {
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
    return new CommentSender({
      blogPost: this,
      id: this.#id,
      commentData,
    }).send();
  }
}

class CommentSender {
  #blogPost;
  #id;
  #commentData;

  constructor({ blogPost, id, commentData }) {
    this.#blogPost = blogPost;
    this.#id = id;
    this.#commentData = commentData;
  }

  send() {
    return post(this.#url(), this.#requestPayload())
      .then(response => this.#handleResponse(response))
      .catch(error => this.#handleError(error));
  }

  #url() {
    return `blogPosts/${this.#id}/comments`;
  }

  #requestPayload() {
    return {
      data: {
        type: 'comment',
        attributes: this.#commentData,
      },
    };
  }

  #handleResponse(response) {
    const { id } = response.data;
    return new Comment({
      id,
      blogPost: this.#blogPost,
      ...this.#commentData,
    });
  }

  #handleError(error) {
    switch (error.status) {
    case 500:
      throw new Error(
        `A server error occurred when trying to comment on "${this.#blogPost.title}"`,
      );
    case 403:
      throw new Error(
        `Sorry, you do not have access to comment on "${this.#blogPost.title}".`,
      );
    }
  }
}

class Comment {
  #id;

  constructor({ id, ...attributes }) {
    this.#id = id;
    Object.assign(this, attributes);
  }
}
