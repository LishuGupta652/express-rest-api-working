const router = require("express").Router();
const Data = require("../models/techwondoeModel");

router.post("/", async (req, res) => {
  const newPost = new Data(req.body);

  try {
    const data = await newPost.save();
    const { _id, password, updatedAt, otherData } = data;
    res.send(otherData);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allPost = await Data.find();
    res.send(allPost);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
