const express = require('express')
const app = express()
const port = Number(process.env.PORT || 8000);
const capabilities = require('./capabilities')

let network_buffer = null;
let header = () => `Hello World! Your network buffer contains: '${network_buffer}' <hr>`

//Idk why '/(help)?' causes an error!? Oh well :P doesn't matter
app.get('/h?(elp)?', (req, res) => {
  res.send(`${header()}
  ${capabilities.bullet_list()}
  `);
});

app.get('/yank/:text', function (req, res) {
  network_buffer = req.params.text;
  res.send(`Got a YANK request: ${req.params.text}`);
})

app.get('/put', function (req, res) {
  res.send(`${network_buffer}`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
