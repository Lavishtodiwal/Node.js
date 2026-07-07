const mongoConnect = require('./utils/databaseUtils'); // adjust path/filename to match your file

mongoConnect((client) => {
  const db = client.db("airbnb"); // your database name
  const collection = db.collection("listings"); // your collection name

  collection.findOne({}).then((result) => {
    console.log("Sample document:", result);
    client.close();
  });
});