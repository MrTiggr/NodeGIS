var app = require('express').createServer();

app.get('/', function(req, res) {
  res.render('/home/ubuntu/NodeGIS/views/index.ejs', {
    user: 'tiggr'
  });
});

app.listen(3000);