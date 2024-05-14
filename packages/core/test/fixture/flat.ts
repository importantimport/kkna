import { type Author, type Comment, definePreset, definePresetTask } from '../../src'

const author: Author = {
  name: 'Example',
}

const comments: Comment[] = [
  {
    author,
    content: 'foo',
    id: 'foo',
    published: new Date(),
    replies: [],
  },
  {
    author,
    content: 'bar',
    id: 'bar',
    // in_reply_to_id: 'foo',
    published: new Date(Date.now() + 10),
    replies: [],
  },
  {
    author,
    content: 'baz',
    id: 'baz',
    // in_reply_to_id: 'bar',
    published: new Date(Date.now() + 100),
    replies: [],
  },
]

export const flat = definePreset((options = {}) => ({
  name: 'flat',
  options,
  task: definePresetTask(() => ({
    comments,
  })),
}))
