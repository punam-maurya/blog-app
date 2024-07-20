const express=require("express");
const {createBlog,readBlog}=require("../controllers/blogController");
const router=express.Router();

router.post("/create",createBlog)
router.get("/read",readBlog)

module.exports=router;