const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('hello world');
});
app.use(express.static(__dirname + '/public'));
app.listen(8080);
