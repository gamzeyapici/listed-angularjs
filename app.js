const express = require('express');
const app = express();
const port = 3000;

app.get('/user', (req, res) => {
  res.send({
    firstName:'Uğur',
    lastName:'KARAKAYA',
    age:36,
    mail:'ugurkarakaya1@gmail.com'
  }).status(200).end();
});

app.get('/', (req, res) => {
  res.send('SELAM').status(200).end();
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))