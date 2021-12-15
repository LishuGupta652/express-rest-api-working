const router = require("express").Router();
const ShortUrl = require("../models/shortUrl");
router.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();

  res.render("index", { shortUrls });
});

router.post("/shortUrls", async (req, res) => {
  const data = await ShortUrl.create({ full: req.body.fullUrl });
  console.log(data);
  res.redirect("/s");
});
module.exports = router;
