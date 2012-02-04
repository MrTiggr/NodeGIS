var jsts = require(__dirname + "/jsts.js");
var redis = require("redis");

var GeometryConverter = function() {
    this.fromJTS = function(geom) {

    };
    this.toJTS = function(geom) {

    };
  }

var convert = new GeometryConverter();

var DataManager = function(opts) {
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
  };


var DataSource = function(id, schema, opts) {
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
  };

var Feature = function(opts) {

  };

var _nodegis = {
  DataManager: DataManager,
  DataSource: DataSource,
  Feature: Feature
};

exports = _nodegis;