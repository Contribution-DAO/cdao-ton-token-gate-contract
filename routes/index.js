const router = require("./router");
const detail = require("./detail");
/* GET home page. */
router.get("/", function (req, res, next) {
  const paramsend = {
    views: "home.ejs",
  };
  res.render("index.ejs", paramsend);
});

module.exports = [router, detail];
