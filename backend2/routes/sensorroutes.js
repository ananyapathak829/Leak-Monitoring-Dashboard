const express=require("express");
const router =express.Router();
const {getallnodes,getnodes,dashboard}=require("../controllers/sensorcontroller");
router.get("/",getallnodes);
router.get("/dashboard",dashboard);
router.get("/:nodeid",getnodes);


module.exports=router;
