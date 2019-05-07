const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/user', (req, res) => {
  res.send({
    firstName:'Gamze',
    lastName:'YAPICI',
    age:36,
    mail:'gaamzee.yaapiicii@gmail.com'
  });
});

app.get('/', (req, res) => res.sendFile(path.resolve(`${__dirname}/index.html`)));

app.post('/', function (req, res) {
  res.send('Got a POST request')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))