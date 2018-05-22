const summaries = [
  {
    id: 42,
    uniqueSlug: 'hello-world',
    title: 'Hello World',
  },
];

const detail = {
  body: 'This is the body.',
};

export function get(path) {
  if (path === 'blogPosts') {
    return Promise.resolve(summaries);
  } else if (path.startsWith('blogPosts/')) {
    return Promise.resolve(detail);
  } else {
    return Promise.reject();
  }
}
