const {Router} = require("express");
const router = Router();
const cropController = require("../controller/cropController");
router.get("/crop", cropController.crop);
module.exports = router;
