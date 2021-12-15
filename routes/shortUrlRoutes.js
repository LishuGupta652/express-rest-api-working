const router = require("express").Router();
const ShortUrl = require("../models/shortUrl");
router.get("/", async (req, res) => {
  const shortUrl = await ShortUrl.find();

  res.render("index", { shortUrls });
});

router.post("/shortUrls", async (req, res) => {
  const data = await ShortUrl.create({ full: req.body.fullUrl });
  console.log(data);
  res.redirect("/");
});
module.exports = router;
