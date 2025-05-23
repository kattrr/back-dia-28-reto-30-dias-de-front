const express = require("express");
const smsController = require("../controllers/smsController")

const router = express.Router();

router.get("/", smsController.gettAllMessages);
router.post("/", smsController.postMessage);

module.exports = router;