const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  `mongodb+srv://book-search:${process.env.MONGO_ATLAS}@cluster0.hq2hp.mongodb.net/book-search?retryWrites=true&w=majority`,

  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

// Start the server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
