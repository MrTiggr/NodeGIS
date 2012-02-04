var express = require('express');
var app = require('express').createServer();

var gis = require(__dirname + "/lib/nodeGIS.js");
var DB = new gis.DataManager();

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
    sources: DB.listSources()
    layout: false
  });
});

app.listen(3000);