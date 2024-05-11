const express = require("express")
const router = express();
const path = require('path' )

router.get("^/$|sub(.html)?", (req, res)=>{
  res.sendFile(path.join(__dirname, "..", "views", "subdir", "sub.html"))
})

router.get("/othertest", (req, res)=>{
  res.sendFile(path.join(__dirname, "..", "views", "subdir", "othertest.html"))
})

module.exports = router;