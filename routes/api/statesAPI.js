const express = require("express")
const router = express()
const stateController = require("../../controller/stateController");


router.post("/", stateController.loadAllDataToDatabase)

module.exports = router