const mongoose=require("mongoose");

const blogSchema=new mongoose.Schema({
   heading:{
    type:String,
    required:true,
   },
   content:{
    type:String,
    required:true
   },
   createdAt:{
    type:Date
   }
})

const Blog=mongoose.model("blog",blogSchema);

module.exports=Blog;