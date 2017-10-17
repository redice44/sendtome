const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let data = {};

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());

app.post('/:id', function (req, res) {
  if (req.body.data) {
    data[req.params.id] = req.body.data;
    res.end('Success\n');
  } else {
    res.end('Fail\n');
  }
});

app.get('/:id', function(req, res) {
  if (data[req.params.id]) {
    res.end(JSON.stringify(data[req.params.id]));
    delete data[req.params.id];
  } else {
    res.end('No Data\n');
  }
});

app.listen(app.get('port'), function() {
  console.log(`Listening on port ${app.get('port')}`);
});