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

router.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (!shortUrl) return res.status(400).send("No short url found");

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
});
module.exports = router;
