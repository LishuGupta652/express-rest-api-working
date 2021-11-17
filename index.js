const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

// Connecting to the database
mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connected to database");
});

// Importing the routes
const postRoutes = require("./routes/postRoutes");

// Using middleware for parsing the body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using the routes as middlesware
app.use("/api/posts", postRoutes);
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Welcome to the API", routes: ["/api/posts"] });
});

// Listening to the port
app.listen(PORT, () => console.log(`App live on http://localhost:${PORT}`));
