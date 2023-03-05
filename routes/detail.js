const router = require("./router");

router.get("/detail/:id", function (req, res, next) {
  const paramsend = {
    views: "detail.ejs",
  };
  res.render("index.ejs", paramsend);
});

module.exports = router;
