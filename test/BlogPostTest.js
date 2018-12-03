import { describe, it } from 'mocha';
import { expect } from 'chai';
import { getSummaries, BlogPost } from '../src/BlogPostService';

describe('BlogPostService', () => {
  describe('getSummaries', () => {
    it('returns blog posts without bodies', () => {
      getSummaries()
        .then(summaries => {
          const post = summaries[0];
          expect(post.title).to.not.be.null;
          expect(post.body).to.be.undefined;
        });
    });
  });

  describe('getBody', () => {
    it('adds the body to the blog post', () => {
      const body = 'This is the body.';

      getSummaries()
        .then(summaries => {
          const post = summaries[0];
          post.getBody()
            .then(() => {
              expect(post.body).to.equal(body);
            });
        });
    });
  });

  describe('postComment', () => {
    it('returns a new comment', () => {
      const commentData = {
        title: 'This is a comment',
        sender: 'Me',
      };

      const blogPost = new BlogPost({ id: 42 });
      return blogPost.postComment(commentData)
        .then(comment => {
          expect(comment.title).to.deep.equal(commentData.title);
          expect(comment.sender).to.deep.equal(commentData.sender);
        });
    });
  });
});
