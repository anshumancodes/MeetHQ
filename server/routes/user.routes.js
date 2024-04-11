const express = require("express");
const router = express.Router();
const {HandleSignUp,HandleLogin} =require("../controllers/user.controllers")

router.post("/",HandleSignUp)
router.post("/login",HandleLogin)

module.exports=router;