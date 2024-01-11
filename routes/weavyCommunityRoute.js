const {Router} = require("express");
const router = Router();
const weavyCommunityController = require("../controller/weavyCommunityController");
let token;
router.get("/weavyCommunity", weavyCommunityController.community);
module.exports = router;
