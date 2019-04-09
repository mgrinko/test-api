const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let users = [
  { firstname: 'Misha', lastname: 'Hrynko '},
  { firstname: 'Petya', lastname: 'Hrynko '},
];

app.get('/', (req, res) => res.send(`Hello from Github`));
app.get('/users', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.json(users)
});

app.listen(port, () => console.log(
  `Example app listening on http://127.0.0.1:${port}!`,
));
