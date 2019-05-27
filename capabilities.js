const capabilities = [
  {
    method:'GET',
    path: '/',
    description: 'show this message'
  }, {
    method:'GET',
    path: '/help',
    description: 'show this message'
  }, {
    method:'GET',
    path: '/yank/:text',
    description: 'place \':text\' into the buffer'
  }, {
    method:'GET',
    path: '/put',
    description: 'retrieve the contents of the buffer'
  }
]

function bullet_list() {
  let body = capabilities.map(myRoute => `
  <h3>${myRoute.method} --> ${myRoute.path}</h3>
  <p>${myRoute.description}</p>
  `);

  return `<ul><li>${body.join('</li><li>')}</li></ul>`
}

exports.capabilities = capabilities;
exports.bullet_list = bullet_list;