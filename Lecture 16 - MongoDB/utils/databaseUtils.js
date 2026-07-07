const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

let _db;

const MONGO_URL =
  "mongodb://osamakhan75557_db_user:cO05GEsV865OarEi@ac-bywyjep-shard-00-00.xt7ydij.mongodb.net:27017,ac-bywyjep-shard-00-01.xt7ydij.mongodb.net:27017,ac-bywyjep-shard-00-02.xt7ydij.mongodb.net:27017/?ssl=true&replicaSet=atlas-ylg41q-shard-0&authSource=admin&appName=Cluster0";

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      console.log("connected to mongodb");
      _db = client.db("airbnb");
      callback();
    })
    .catch((err) => {
      console.log("Error while connecting to Mongo: ", err);
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error("Mongo not connected");
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
