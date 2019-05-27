const express = require('express')
const app = express()
const port = Number(process.env.PORT || 8000);
const capabilities = require('./capabilities')

let network_dictionary = {};
let header = () => {
  let allEntry_string = Object.entries(network_dictionary).map(
    ([key, value]) => `buffer <b>${key}</b> contains '${value}'`
  ).join('<br>');
  return `${allEntry_string}<hr>`
}

//Idk why '/(help)?' causes an error!? Oh well :P doesn't matter
app.get('/h?(elp)?', (req, res) => {
  res.send(`${header()}
  ${capabilities.bullet_list()}
  `);
});

app.get('/yank/:text', function (req, res) {
  network_dictionary.default = req.params.text;
  res.send(`Got a YANK request: ${req.params.text}`);
})

app.get('/put', function (req, res) {
  res.send(`${network_dictionary.default}`);
})

app.get('/:bufname/yank/:text', function (req, res) {
  network_dictionary[req.params.bufname] = req.params.text;
  res.send(`Got a YANK request by ${req.params.bufname}: ${req.params.text}`);
})

app.get('/:bufname/put', function (req, res) {
  res.send(`${network_dictionary[req.params.bufname]}`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
