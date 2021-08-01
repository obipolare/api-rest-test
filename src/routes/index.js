const { Router } = require("express");
const router = Router();

// Stating the server
router.get("/test", (req, res) => {
  const data = {
    name: "fazt",
    website: "ed.team",
  };
  res.send(data);
});

module.exports = router;
