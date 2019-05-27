const express = require('express')
const app = express()
const port = Number(process.env.PORT || 8000);

let network_buffer = null;

app.get('/', (req, res) => {
  res.send(`Hello World! Your network buffer contains: '${network_buffer}'`);
});

app.get('/yank/:text', function (req, res) {
  network_buffer = req.params.text;
  res.send(`Got a YANK request: ${req.params.text}`);
})

app.get('/put', function (req, res) {
  res.send(`${network_buffer}`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
