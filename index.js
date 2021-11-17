const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Using middleware for parsing the body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/:name", (req, res) => {
  res.send([req.query.name, req.params.name, req.body.name]);
});

// Listening to the port
app.listen(PORT, () => console.log(`App live on http://localhost:${PORT}`));
