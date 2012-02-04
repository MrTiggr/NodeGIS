var jsts = require(__dirname + "/jsts.js");
var redis = require("redis");

function GeometryConverter() {
  this.fromJTS = function(geom) {

  };
  this.toJTS = function(geom) {

  };
}

var convert = new GeometryConverter();

function DataManager(opts) {
  this.client = redis.createClient();
  client.on("error", function(err) {
    console.log("Error " + err);
  });

  this.listSources = function(callback) {
    this.client.hgetall("ngis::sources", function(err, obj) {
      var sources = [];
      for (var s in obj) {
        sources.push(obj[s]);
      }
      callback(sources);
    });
  }
}

function DataSource(id, schema, opts) {
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
}

function Feature(opts) {

}

exports = {
  DataManager: DataManager,
  DataSource: DataSource,
  Feature: Feature
};