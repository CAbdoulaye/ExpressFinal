const express = require("express")
const router = express();
const path = require('path' )

router.get("^/$|index(.html)?", (req, res)=>{
  res.sendFile(path.join(__dirname, "..", "views", "index.html"))
})

router.get("/test", (req, res)=>{
  res.sendFile(path.join(__dirname, "..", "views", "test.html"))
})

router.get("/test2", (req, res)=>{
  res.redirect(301, "/test")
})

module.exports = router;