const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

let users = [];

fs.readFile('./users.json', 'utf8', function(err, data) {
  if (err) {
    return;
  }

  console.log(data);
});

app.use(bodyParser.text());

app.get('/', (req, res) => res.send(`Hello from Github`));
app.get('/users', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(users)
});

app.post('/users', (req, res) => {
  const newUser = JSON.parse(req.body);
  users.push(newUser);

  res.set('Access-Control-Allow-Origin', '*');
  res.json(users)
});

app.listen(port, () => console.log(
  `Example app listening on http://127.0.0.1:${port}!`,
));
