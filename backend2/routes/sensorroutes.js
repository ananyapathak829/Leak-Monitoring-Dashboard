const express=require("express");
const router =express.Router();
const {getallnodes,getnodes,getstats,dashboard}=require("../controllers/sensorcontroller");
router.get("/",getallnodes);
router.get("/stats",getstats);
router.get("/dashboard",dashboard);
router.get("/:nodeid",getnodes);


module.exports=router;
