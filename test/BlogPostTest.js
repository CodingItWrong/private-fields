import { describe, it } from 'mocha';
import { expect } from 'chai';
import { getSummaries, getBody } from '../src/BlogPostService';

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
          getBody(post)
            .then(() => {
              expect(post.body).to.equal(body);
            });
        });
    });
  });
});
