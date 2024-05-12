const express = require("express")
const router = express()
const stateController = require("../../controller/stateController")

//get
router.get("/", stateController.getAllStates)
router.get("/:state", stateController.getState)
router.get("/:state/capital", stateController.getStateCapital)
router.get("/:state/funfact", stateController.getStateFunfact)
router.get("/:state/nickname", stateController.getStateNickname)
router.get("/:state/population", stateController.getStatePopulation)
router.get("/:state/admission", stateController.getStateAdmission)

//post
router.post("/:state/funfact", stateController.postStateFunfact)

//patch
router.patch("/:state/funfact", stateController.patchStateFunfact)

//delete
router.delete("/:state/funfact", stateController.deleteStateFunfact)

module.exports = router