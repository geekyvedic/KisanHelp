const {Router} = require("express");
const router = Router();
const locationController = require("../controller/locationController")
router.get("/location/:lat/:long", locationController.location);
router.get("/location",locationController.location_redirect)
module.exports = router;
