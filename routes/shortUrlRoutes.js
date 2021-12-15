const router = require("express").Router();
const ShortUrl = require("../models/shortUrl");
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect("/");
});
module.exports = router;
