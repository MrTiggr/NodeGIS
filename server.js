var express = require('express');
var app = require('express').createServer();
var redis = require("redis");
var jsts = require(__dirname + "/lib/jsts.js");
var gis = {
  DataManager: function DataManager(opts) {
    var self = this;
    this.client = redis.createClient();
    this.client.on("error", function(err) {
      console.log("Error " + err);
    });
    this.listSources = function(callback) {
      self.client.hgetall("ngis::sources", function(err, obj) {
        var sources = [];
        for (var s in obj) {
          sources.push(obj[s]);
        }
        callback(sources);
      });
      this.close = function() {
        self.client.close();
      }
    }
  },
  DataSource: function DataSource(id, schema, opts) {
    this.id = id;
    this.schema = schema;
    this.query = function(query, callback) {

    };
    this.getById = function(id, callback) {

    };
    this.insert = function(feature, callback) {

    };
    this.update = function(feature, callback) {

    };
  },
  Feature: function Feature(opts) {

  }
}


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
  var DB = new gis.DataManager({});
  DB.listSources(function(srs) {
    res.render(__dirname + '/views/index.ejs', {
      user: 'tiggr',
      sources: srs,
      layout: false
    });
  });
  DB.close();
});

app.listen(3000);