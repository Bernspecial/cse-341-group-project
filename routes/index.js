const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Group project")
});

router.use("/user", require("./user"));

module.exports = router;