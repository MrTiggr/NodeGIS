var jsts = require("jsts");
var redis = require("redis");

exports = {
  DataManager: function DataManager(opts) {
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
};