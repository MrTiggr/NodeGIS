var jsts = require("./lib/jsts.js");
var redis = require("redis");


var DataManager = function(opts) {
    this.client = redis.createClient();

    client.on("error", function(err) {
      console.log("Error " + err);
    });

    this.init = function(opts) {

    }
    this.listSources = function() {
      return null;
    }
  }

var DataSource = function(id, schema, opts) {

  }

var Feature = function(opts) {

  }

var _nodegis = {
  DataManager: DataManager,
  DataSource: DataSource,
  Feature: Feature
};

exports = _nodegis;