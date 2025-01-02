export default [
  {
    path: '/child/ddd',
    meta: {
      auth: ['ddd'],
    },
  },
  {
    path: '/action',
    meta: {
      auth: ['action', 'qweasd'],
    },
  },
  {
    name: 'about',
    meta: {
      auth: ['about'],
    },
  },
]
