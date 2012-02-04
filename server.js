var app = require('express').createServer();
app.configure(function() {
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});
app.get('/', function(req, res) {
  res.render(__dirname + '/views/index.ejs', {
    user: 'tiggr',
    layout: false
  });
});

app.listen(3000);