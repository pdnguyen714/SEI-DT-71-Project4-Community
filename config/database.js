const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect(process.env.REACT_APP_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

db.on("connected", () => {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});