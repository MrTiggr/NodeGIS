var express = require('express');
var app = require('express').createServer(express.logger(), express.bodyParser());
var redis = require("redis");
var uuid = require('node-uuid');
var jsts = require("jsts");
console.log(jsts);
var geomFactory = new jsts.geom.GeometryFactory(new jsts.geom.PrecisionModel(jsts.geom.PrecisionModel.FLOATING));
var gis = {
  DataManager: function DataManager(opts) {
    var self = this;
    this.client = redis.createClient();
    this.client.on("error", function(err) {
      console.log("Error " + err);
    });
    this.listSources = function(callback) {
      self.client.hgetall("ngis::datasources", function(err, obj) {
        var sources = [];
        for (var s in obj) {
          sources.push(JSON.parse(obj[s]));
        }
        callback(sources);
      });
    }
    this.addSource = function(source, callback, error) {
      var src = JSON.stringify(source);
      self.client.hset("ngis::datasources", source.id, src, redis.print);
      callback(source);
      return source;
    }
    this.getSource = function(id, callback) {

    };
    this.close = function() {
      self.client.quit();
    }
  },
  DataSource: function DataSource(id, name, schema, opts) {
    this.id = id || uuid.v4();
    this.name = name || this.id;
    this.uuid = uuid.v4();
    this.schema = schema || {};
    var self = this;
    this.open = function() {
      self.client = redis.createClient();
      self.client.on("error", function(err) {
        console.log("Error " + err);
      });
    }
    this.query = function(query, callback) {

    };
    this.getById = function(id, callback) {

    };
    this.insert = function(feature, callback) {

    };
    this.update = function(feature, callback) {

    };
    this.save = function(feature) {

    };
    this.close = function() {
      self.client.quit();
    }
  },
  Feature: function Feature(opts) {

  }
}


app.configure(function() {
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
  //DB.close();
});

app.get('/sources', function(req, res) {
  console.log(JSON.stringify(geomFactory.createPoint({
    x: 120.00,
    y: 0.00
  })));
  var DB = new gis.DataManager({});
  DB.listSources(function(srs) {
    res.render(__dirname + '/views/sources.ejs', {
      user: 'tiggr',
      sources: srs,
      layout: false
    });
  });
  //DB.close();
});

app.get('/source/:id', function(req, res) {
  var id = req.params.id;
  var DB = new gis.DataManager({});
  DB.getSource(id, function(srs) {
    res.render(__dirname + '/views/source.ejs', {
      user: 'tiggr',
      source: srs,
      layout: false
    });
  });
});

app.get('/addSource', function(req, res) {
  res.render(__dirname + '/views/addsource.ejs', {
    user: 'tiggr',
    layout: false
  });
});

app.post('/addSource', function(req, res) {
  var DB = new gis.DataManager({});
  var source = new gis.DataSource(req.param("sourceid"), req.param("sourcename"));
  source.id = req.param("sourceid");
  source.name = req.param("sourcename");
  console.log(source);
  DB.addSource(source, function(srs) {
    DB.listSources(function(srses) {
      res.render(__dirname + '/views/sources.ejs', {
        user: 'tiggr',
        sources: srses,
        layout: false
      });
    });
  });

});

app.listen(3000);