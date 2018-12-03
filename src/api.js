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

const newComment = {
  data: {
    id: 27,
  },
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

export function post() {
  return Promise.resolve(newComment);
}
