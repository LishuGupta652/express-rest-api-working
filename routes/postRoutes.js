const router = require("express").Router();
const Post = require("../models/postModel");

router.get("/", (req, res) => {
  console.log("Get is working fine");
});

module.exports = router;
