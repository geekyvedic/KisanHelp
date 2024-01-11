const {Router} = require("express");
const router = Router();
const schemesController = require("../controller/schemesController");
router.get("/schemes",schemesController.schemes);
module.exports = router;
